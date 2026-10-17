import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../config/contact';
import { profile } from '../data/profile';
import Button from './Button';
import SectionHeading from './SectionHeading';

// `website` is a honeypot: hidden from people, but bots tend to fill in every field.
const EMPTY_FORM = { name: '', email: '', company: '', message: '', website: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LINE_FIELDS = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name', maxLength: 100 },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', maxLength: 254 },
  {
    name: 'company',
    label: 'Company',
    type: 'text',
    autoComplete: 'organization',
    maxLength: 100,
    optional: true,
  },
];

const VALIDATORS = {
  name: (value) => (value.trim() ? '' : 'Enter your name.'),
  email: (value) => {
    if (!value.trim()) return 'Enter your email address so I can reply.';
    return EMAIL_PATTERN.test(value.trim()) ? '' : 'Enter an email address like name@example.com.';
  },
  message: (value) => (value.trim() ? '' : 'Write a message.'),
};

// Toast messages. Fixed ids stop repeated clicks from stacking duplicates.
const notifySent = () =>
  toast.success('Thanks for your message. I’ll get back to you as soon as possible.', {
    toastId: 'contact-sent',
  });
const notifyFailed = () =>
  toast.error('Your message wasn’t sent. Check your connection and try again, or message me on LinkedIn.', {
    toastId: 'contact-failed',
  });
const notifyInvalid = () =>
  toast.error('Please fill in the required fields.', { toastId: 'contact-invalid' });

const validate = (values) =>
  Object.fromEntries(Object.entries(VALIDATORS).map(([name, check]) => [name, check(values[name])]));

const ErrorText = ({ id, children }) => (
  <p id={id} aria-live="polite" className="text-sm text-[#FF9C9C] empty:hidden">
    {children}
  </p>
);

const Contact = () => {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
    // Clear an error as soon as the field becomes valid.
    if (errors[name] && !VALIDATORS[name]?.(value)) {
      setErrors((previous) => ({ ...previous, [name]: '' }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (VALIDATORS[name] && value) {
      setErrors((previous) => ({ ...previous, [name]: VALIDATORS[name](value) }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (sending) return;

    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors).find((name) => nextErrors[name]);
    if (firstInvalid) {
      notifyInvalid();
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    const { website, ...templateParams } = values;
    if (website) {
      setValues(EMPTY_FORM);
      notifySent();
      return;
    }

    setSending(true);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
        blockHeadless: true,
        limitRate: { id: 'contact-form', throttle: 10000 },
      });
      setValues(EMPTY_FORM);
      setErrors({});
      notifySent();
    } catch (error) {
      console.error('Contact form failed to send', error);
      notifyFailed();
    } finally {
      setSending(false);
    }
  };

  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    required: name in VALIDATORS,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': `contact-${name}-error`,
  });

  return (
    <section id="contact" aria-labelledby="contact-heading" className="page">
      <SectionHeading id="contact-heading" first="Let’s" second="talk" />

      <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="text-xl font-light leading-snug md:text-2xl">
            Hiring for a cloud or backend role, or want to talk about a project? Send me a message and I’ll
            reply by email.
          </p>
          <p className="mt-6 text-muted">
            You can also find me on{' '}
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-line text-white"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>

        {/* The original site's "New message" compose window. */}
        <form
          noValidate
          onSubmit={handleSubmit}
          aria-busy={sending}
          className="relative rounded-3xl border border-white/20 bg-raised lg:col-span-8"
        >
          <p className="border-b border-white/20 px-6 py-4 text-center text-sm text-muted md:px-8">
            New message
          </p>

          {LINE_FIELDS.map((field) => (
            <div
              key={field.name}
              className="border-b border-white/20 px-6 transition-shadow focus-within:shadow-[inset_0_-2px_0_0_#906EF0] md:px-8"
            >
              <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-4">
                <label htmlFor={`contact-${field.name}`} className="shrink-0 text-muted sm:w-28">
                  {field.label}
                  {field.optional && <span className="sr-only"> (optional)</span>}
                </label>
                <input
                  {...fieldProps(field.name)}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  maxLength={field.maxLength}
                  placeholder={field.optional ? 'Optional' : undefined}
                  className="w-full bg-transparent text-lg text-white placeholder:text-white/40 focus:outline-none"
                />
              </div>
              <div className="pb-3 empty:hidden sm:pl-32">
                <ErrorText id={`contact-${field.name}-error`}>{errors[field.name]}</ErrorText>
              </div>
            </div>
          ))}

          <div className="px-6 pt-6 md:px-8">
            <label htmlFor="contact-message" className="text-muted">
              Message
            </label>
            <textarea
              {...fieldProps('message')}
              rows={8}
              maxLength={5000}
              className="mt-3 w-full rounded-xl border border-white/20 bg-sunken p-4 text-white focus:border-accent focus:outline-none"
            />
            <ErrorText id="contact-message-error">{errors.message}</ErrorText>
          </div>

          <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label htmlFor="contact-website">Leave this field empty</label>
            <input
              id="contact-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end px-6 py-6 md:px-8">
            <Button type="submit" variant="solid" disabled={sending}>
              {sending ? 'Sending…' : 'Send message'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

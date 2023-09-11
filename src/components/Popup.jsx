import React from "react";
import '../index.css';

const Popup = ( { children } ) =>{
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="popup font-medium"
        onClick={() => setShowModal(true)}
      >
        Description
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-white border-[1px] rounded-lg shadow-lg relative flex flex-col w-full bg-[#0D0D0D] focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-white text-sm md:text-lg leading-relaxed">
                  {children}
                  </p>
                </div>
                {/*footer*/}
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none ml-3 mr-3 mb-5 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Popup;
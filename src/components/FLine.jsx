import React from 'react'

const FLine = () => {
    const horizontalRuleStyle = {
        borderTop: '1px solid #fff',
        width: '100%', // Full width of the container
        margin: '20px 0', // Add spacing above and below the line
      };
    
      return (
        <div style={horizontalRuleStyle}></div>
      );
    };

export default FLine
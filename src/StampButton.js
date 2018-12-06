import React from 'react';

const StampButton = (props) => {
    console.log('I am StampButton and I am rendering');
    return (
        <button 
          onClick={props.handleClick} 
          className="my-button"
        >go ahead, click me, i dare you</button>        
    );
};

export default StampButton;
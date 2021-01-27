import React from "react";

const ButtonControl = ({svg, text, handler}) => {
  return (
    <button className='button-control' onClick={() =>  handler ? handler() : null }>{svg} {text}</button>
  );
}

export default ButtonControl;
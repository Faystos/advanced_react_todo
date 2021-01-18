import React from "react";

const ButtonControl = ({svg, text}) => {
  return (
    <button className='button-control'>{svg} {text}</button>
  );
}

export default ButtonControl;
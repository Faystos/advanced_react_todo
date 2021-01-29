import React from 'react';

const ColorInputRadio = ({ color, handlerInputRadio }) => {
  return (
    <div>
      <input type = 'radio' name = 'color-name' value = { `${color}` } id = { `color-${ color }` } className = 'sidebar__radio visually-hidden' onChange = { ({ target }) => handlerInputRadio(target.value) }/>
      <label htmlFor = { `color-${ color }` } className = { `sidebar__radio_color sidebar__radio_color--${ color }` }></label>
    </div>
  );
}

export default ColorInputRadio;
import React from 'react';
import ColorInputRadio from '../ColorInputRadio';

const BlockRadioInputs = ({handlerInputRadio}) => {
  return (
    <div className='sidebar__form_input_radio'>
      <ColorInputRadio color={`gray`} handlerInputRadio={handlerInputRadio}/>
      <ColorInputRadio color={`green`} handlerInputRadio={handlerInputRadio}/>
      <ColorInputRadio color={`blue`} handlerInputRadio={handlerInputRadio}/>
      <ColorInputRadio color={`pink`} handlerInputRadio={handlerInputRadio}/>
      <ColorInputRadio color={`light_green`} handlerInputRadio={handlerInputRadio}/>
      <ColorInputRadio color={`purple`} handlerInputRadio={handlerInputRadio}/>
      <ColorInputRadio color={`black`} handlerInputRadio={handlerInputRadio}/>
      <ColorInputRadio color={`red`} handlerInputRadio={handlerInputRadio}/>        
    </div>
  );
};

export default BlockRadioInputs;
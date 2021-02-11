import React, { useContext } from 'react';
import ColorInputRadio from '../colorInputRadio';
import Context from '../../context';

const BlockRadioInputs = ({ handlerInputRadio }) => {
  const { dataColors } = useContext(Context); 
  const radioInput =  dataColors.map(({ name, id }) => {
    return <ColorInputRadio color = { name } handlerInputRadio = { handlerInputRadio } key = { id }/>
  });

  return (
    <div className = 'sidebar__form_input_radio'>      
      { radioInput }
    </div>
  );
};

export default BlockRadioInputs;
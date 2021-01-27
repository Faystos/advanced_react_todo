import React, { useState } from "react";
import SvgIcon from '../svgIcon';
import ButtonControl from '../buttonControl';
import FormAddTask from '../formAddTask';
import BlockRadioInputs from '../BlockRadioInputs';

const AddTask = ({handlerPopup, activePopup}) => {

  const [nameTask, setNameTask] = useState('');
  const [taskColor, setTaskColor] = useState('');

  const handlerInputNameTask = (value) => {
    setNameTask(nameTask => nameTask = value);    
  }

  const handlerInputColorTask = (value) => {
    setTaskColor(taskColor => taskColor = value);    
  }

  const PoPup = (
    <div className='sidebar__add_task_popup'>
        <button type='button' className='sidebar__add_task_popup_close' onClick={() => handlerPopup()}><SvgIcon name={'close'} color={'#ffff'} size={7} className={''}/></button>
        <FormAddTask nameTask ={nameTask} taskColor={taskColor} handlerInputText={handlerInputNameTask}>
          <BlockRadioInputs handlerInputRadio={handlerInputColorTask}/>
        </FormAddTask>
      </div>
  ); 

  const vuePoPup = activePopup ? PoPup : null;


  return (
    <div className='sidebar__add_task'>
      <ButtonControl svg={<SvgIcon name={'add'} color={'#7c7c7c'} size={10} className={''}/>} text={`Добавить папку`} handler={handlerPopup}/>
      {vuePoPup}          
    </div>
  );  
}

export default AddTask;
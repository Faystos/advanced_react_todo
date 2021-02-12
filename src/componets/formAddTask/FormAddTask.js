import React from 'react';
import TaskInputText from '../taskInputText';


const FormAddTask = ({ nameTask, handlerInputNameTask, addNewTask, children }) => {  
  const blockRadio = children ? children : null;

  return (
    <form className = 'form_add_item'>
      <TaskInputText nameTask = { nameTask } handlerInputNameTask = { handlerInputNameTask }/>
      { blockRadio }      
      <button type = 'submit' className = 'sidebar__button_submit' onClick = { addNewTask }>Добавить</button>
    </form>
  );
}

export default FormAddTask;
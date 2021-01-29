import React from 'react';
import TaskInputText from '../TaskInputText';


const FormAddTask = ({ nameTask, handlerInputText, addNewTask, children }) => {  
  const blockRadio = children ? children : null;

  return (
    <form>
      <TaskInputText nameTask = { nameTask } handlerInputText = { handlerInputText }/>
      { blockRadio }      
      <button type = 'submit' className = 'sidebar__button_submit' onClick = { addNewTask }>Добавить</button>
    </form>
  );
}

export default FormAddTask;
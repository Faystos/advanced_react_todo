import React from 'react';
import TaskInputText from '../TaskInputText';


const FormAddTask = ({nameTask, taskColor, handlerInputText, children}) => {  
  const blockRadio = children ? children : null;

  return (
    <form>
      <TaskInputText nameTask={nameTask} handlerInputText={handlerInputText}/>
      {blockRadio}      
      <button type='submit' className='sidebar__button_submit' onClick={(evt) => {
        evt.preventDefault();
        const newTask = {
          nameTask,
          taskColor
        }

        console.log(newTask);
      }}>Добавить</button>
    </form>
  );
}

export default FormAddTask;
import React from 'react';

const TaskInputText = ({nameTask, handlerInputText}) => {

  return(
    <div className='sidebar__form_input_text'>
      <label htmlFor='task-title' className='visually-hidden'>Оглавление задачи</label>
      <input type='text' id='task-title' placeholder='Название папки' value={nameTask} onChange={({target})=> handlerInputText(target.value)}/>
    </div>
  );
};

export default TaskInputText;
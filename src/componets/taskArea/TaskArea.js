import React, { useState, useContext, useEffect, useRef } from 'react';

import FormAddTask from '../formAddTask';
import SvgIcon from '../svgIcon';
import Context from '../../context';

const TaskArea = () => { 
  
  const {dataFolder, dataTasks,  selectTaskId, compledetTask, deleteDoneTask, addNewTask} = useContext(Context); 

  const [nameTask, setNameTask] = useState('');

  const handlerInputNameTask = (value) => {
    setNameTask(nameTask => nameTask = value);      
  }

  const resetForm = () => {
    setNameTask('');
  }

  const newTask = evt => {
    evt.preventDefault(); 
    
    if(!nameTask) {
      alert('Введите имя задачи');
      return;
    }

    addNewTask( {
      completed: false,
      id: dataTasks.length + 1,
      listId: title[0].id,
      text: nameTask
    });

    resetForm();
  }
 
  const title = dataFolder &&  selectTaskId ? dataFolder.filter(task => {
    const item = selectTaskId && task.id === selectTaskId ? task : null;    
    return item;    
  }) : null;

  let tasks = dataTasks && selectTaskId ? dataTasks.filter(task => {
    let item = selectTaskId && task.listId === selectTaskId ? task : null;
    return item;
  }) : null;
  
  let viewTitile = title && title.length ? title[0].name : null;
  let viewTask = viewTitile && tasks && tasks.length ?  <TaskList tasks = { tasks } compledetTask = { compledetTask } deleteDoneTask = { deleteDoneTask }/> : null;  

  return (                
    viewTitile && <Task viewTitile = { viewTitile } viewTask = { viewTask } nameTask = { nameTask } handlerInputNameTask = { handlerInputNameTask } addNewTask = { newTask }/>          
  );
}

export default TaskArea;

// ****************************************************************************************

const Task = ({ viewTitile, viewTask, nameTask, handlerInputNameTask, addNewTask }) => {
  return (
    <div className = 'right__task_area'>
    <div className = 'right__task_title'>     
      <InputTaskTitle value = { viewTitile }/>
    </div>
    <div className = 'right__tasks'>
      { viewTask }
    </div>
    <FormAddTask nameTask = { nameTask } handlerInputNameTask = { handlerInputNameTask } addNewTask = { addNewTask }/>
    </div>
    
  );
}

const TaskList = ({ tasks, compledetTask, deleteDoneTask }) => {
  return (
    tasks.map(task => {
      const check = task.completed ? `checked` : ``;
      const disable = task.completed ? `disabled` : ``;
      const taskDone = task.completed ? `right__task--done` : ``
      
      return <div className = {`right__task ${taskDone}`} key = {`task-key-${task.id}`}>
        <div className = 'right__task_check'>
          <input type = 'checkbox' className = 'visually-hidden' id={ `task-item${task.id}` } defaultChecked = { check } disabled = { disable } onChange={() => compledetTask(task.id)}/>
          <label htmlFor = { `task-item${task.id}` }></label>
          <span>{task.text}</span>
        </div>          

        <button type = 'button' className = 'right__task_del' onClick = {()=> deleteDoneTask(task.id)}>
          <SvgIcon name = { 'close' } color = { '#e3e3e3' } size = { 10 } className = { '' }/>
        </button>        
      </div>
    })
  );
}


const InputTaskTitle = ({ value }) => {
  const {updateTitleDataFolder} = useContext(Context);
  const [inputActive, setInputActive] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const inputTitle = useRef(null);

  useEffect(() => {
    setInputValue(inputValue => inputValue = value);
    setInputActive(inputActive => inputActive = false);
  }, [value]);

  const inputStatusActive = !inputActive ? true : false;

  const handlerButtonActiveInput = evt => {
    evt.preventDefault();   

    if (!inputActive) {
      setInputActive(active => active = !inputActive);
      inputTitle.current.focus();
    } else if (inputActive) {
      setInputActive(active => active = !inputActive);
      updateTitleDataFolder(inputValue);      
    }

    inputTitle.current.focus();   

  }

  const handlerChangeInput = evt => {
    setInputValue(inputValue => inputValue = evt.target.value);
  }

  const handlerEnterDown = evt => {
    if (evt.keyCode === 13) {
      setInputActive(active => active = false);
      setInputValue(inputValue => inputValue = evt.target.value); 
      updateTitleDataFolder(inputValue)        
    }    
  }

  return (
    <div>
       <label className = 'visually-hidden' htmlFor='title-input'>Заголовок</label>
      <input type = 'text' id = 'title-input' value = { inputValue }  onChange = { handlerChangeInput }  onKeyDown = { handlerEnterDown } readOnly = { inputStatusActive } ref = { inputTitle }/>
     
      

      <button onClick = { handlerButtonActiveInput }><SvgIcon name = { 'edit' } color = { '#e3e3e3' } size = { 15 } className = { '' }/></button>
    </div>
  );
}
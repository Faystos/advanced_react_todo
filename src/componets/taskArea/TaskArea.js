import React, { useContext } from 'react';

import SvgIcon from '../svgIcon';
import Context from '../../context';

const TaskArea = () => { 
  
  const {dataList, dataTasks,  selectTaskId} = useContext(Context); 
 
  const title = dataList &&  selectTaskId ? dataList.filter(task => {
    const item = selectTaskId && task.id === selectTaskId ? task : null;    
    return item;    
  }) : null;

  let tasks = dataTasks && selectTaskId ? dataTasks.filter(task => {
    let item = selectTaskId && task.listId === selectTaskId ? task : null;
    return item;
  }) : null;
  
  let viewTitile = title && title.length ? title[0].name : null;
  let viewTask = viewTitile && tasks && tasks.length ?  <TaskList tasks = { tasks }/> : null;  

  return (                
    viewTitile && <TaskName viewTitile = { viewTitile } viewTask = { viewTask } />          
  );
}

export default TaskArea;

const TaskName = ({ viewTitile, viewTask }) => {
  return (
    <div className = 'right__task_area'>
    <div className = 'right__task_title'>
      <h2>{ viewTitile }</h2>
    </div>
    <div className = 'right__tasks'>
      { viewTask }
    </div>
    </div>
    
  );
}

const TaskList = ({ tasks }) => {
  return (
    tasks.map(task => {
      const check = task.completed ? `checked` : '';
      
      return <div className = 'right__task' key = {`task-key-${task.id}`}>
        <div className = 'right__task_check'>
          <input type = 'checkbox' className = 'visually-hidden' id={ `task-item${task.id}` } defaultChecked = { check }/>
          <label htmlFor = { `task-item${task.id}` }></label>
          <span>{task.text}</span>
        </div>          

        <button type = 'button' className = 'right__task_del'>
          <SvgIcon name = { 'close' } color = { '#e3e3e3' } size = { 10 } className = { '' }/>
        </button>        
      </div>
    })
  );
}




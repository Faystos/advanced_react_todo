import React, { useState } from "react";
import SvgIcon from '../svgIcon';

const TasksList = ({data, deleteTask}) => {
  const [selectTask, setSelectTask] = useState(null);
  return (
   data.map(({id, name, color}) => {
    let activClassName = selectTask === id ? `sidebar__task_item--active` : '';
     return (      
       <div className={`sidebar__task_item ${activClassName}`} key={id} onClick={() => setSelectTask(id)}>
         <div className='sidebar__task_info'>
           <span className={`sidebar__task_color sidebar__task_color--${color}`}></span>
           <span className='sidebar__task_title'>{name}</span>
         </div>
         <button type='button' className='sidebar__task_del' onClick={ () => deleteTask(id) }><SvgIcon name={'close'} color={'#e3e3e3'} size={10} className={''}/></button>        
       </div>      
     );
   })    
  );
 }

 export default TasksList;
import React from "react";
import SvgIcon from '../svgIcon';

const TasksList = ({data}) => {
  return (
   data.map(({id, name, color}) => {
     return (      
       <div className='sidebar__task_item' key={id}>
         <div className='sidebar__task_info'>
           <span className={`sidebar__task_color sidebar__task_color--${color}`}></span>
           <span className='sidebar__task_title'>{name}</span>
         </div>
         <button type='button' className='sidebar__task_del'><SvgIcon name={'close'} color={'#e3e3e3'} size={10} className={''}/></button>        
       </div>      
     );
   })    
  );
 }

 export default TasksList;
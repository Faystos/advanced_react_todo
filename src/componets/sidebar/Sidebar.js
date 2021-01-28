import React, { useState, useContext } from 'react';
import ButtonControl from '../buttonControl';
import SvgIcon from '../svgIcon';
import AddTask from '../addTask';
import TasksList from '../tasksList';
import Context from '../../context';

const Sidebar = () => {
  const { dataList, updateData, deleteTask } = useContext(Context);  
  const [activePopup, setActivePopup] = useState(false);
  const handlerPopup = () => {
    setActivePopup(!activePopup);    
  };
  const tasksList = dataList ? <TasksList deleteTask={deleteTask}/> : null; 

  return (
    <div className='sidebar'>
      <div className='sidebar__all_task'>
        <ButtonControl svg={ <SvgIcon name={ 'all' } color={ '#7c7c7c' } size={ 18 } className={ '' }/> } text={ `Все задачи` }/>
      </div>
      <div className='sidebar__tasks'>
        { tasksList }
      </div>
      <AddTask handlerPopup={handlerPopup} activePopup={activePopup} updateData={updateData}/>       
    </div>
  );
};

export default Sidebar;
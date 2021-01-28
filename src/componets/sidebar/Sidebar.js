import React, { useState, useEffect } from 'react';
import ButtonControl from '../buttonControl';
import SvgIcon from '../svgIcon';
import arrMocks from '../../store/mock/mock';
import AddTask from '../addTask';
import TasksList from '../tasksList';

const Sidebar = () => {

  const [data, setData] = useState(null);
  const [activePopup, setActivePopup] = useState(false);

  useEffect(()=> {
    setData(data => data = arrMocks);    
  }, []); 

  const handlerPopup = () => {
    setActivePopup(!activePopup);    
  }

  const updateData = newTask => {
    const newData = [...data, newTask];    
    setData(data => data = newData);    
  }  

  const deleteTask = id => {
    const newData = data.filter(task => task.id !== id);
    setData(data => data = newData);
  }

  const tasksList = data ? <TasksList data={data} deleteTask={deleteTask}/> : null; 

  return (
    <div className='sidebar'>
      <div className='sidebar__all_task'>
        <ButtonControl svg={ <SvgIcon name={ 'all' } color={ '#7c7c7c' } size={ 18 } className={ '' }/> } text={ `Все задачи` }/>
      </div>
      <div className='sidebar__tasks'>
        { tasksList }
      </div>
      <AddTask handlerPopup={handlerPopup} activePopup={activePopup} data={data} updateData={updateData}/>       
    </div>
  );
}

export default Sidebar;
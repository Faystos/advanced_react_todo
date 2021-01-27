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
  }, [ data ]);

  const handlerPopup = () => {
    setActivePopup(!activePopup);    
  }

  

  const tasksList = data ? <TasksList data={data}/> : null; 

  return (
    <div className='sidebar'>
      <div className='sidebar__all_task'>
        <ButtonControl svg={ <SvgIcon name={ 'all' } color={ '#7c7c7c' } size={ 18 } className={ '' }/> } text={ `Все задачи` }/>
      </div>
      <div className='sidebar__tasks'>
        { tasksList }
      </div>
      <AddTask handlerPopup={handlerPopup} activePopup={activePopup}/>       
    </div>
  );
}



export default Sidebar;
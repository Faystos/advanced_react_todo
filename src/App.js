import React, { useState, useEffect } from 'react';
import Sidebar from './componets/sidebar';
import Context from './context';

import {lists, tasks, colors} from './store/mock/mock';




const  App = () => {  
  const [dataList, setDataList] = useState(null);
  const [dataTasks, setDataTasks] = useState(null);
  const [dataColors, setDataColors] = useState(null); 
  
  useEffect(()=>{
    setDataList(dataList => dataList =lists);
    setDataTasks(dataTasks => dataTasks = tasks);
    setDataColors(dataColors => dataColors = colors);
  }, []);
  


  const updateData = newTask => {
    const newData = [...dataList, newTask];    
    setDataList(data => data = newData);       
  }  

  const deleteTask = id => {
    const newData = dataList.filter(task => task.id !== id);
    setDataList(data => data = newData);
  }

  const appContext = {
    dataList,
    dataTasks,
    dataColors,
    updateData,
    deleteTask
  };

  

  
  return (
    <Context.Provider value = {appContext}>
    <div className='todo'>
      <Sidebar />     

      <div className='right'></div>
    </div>
    </Context.Provider>
  );
}
export default App;

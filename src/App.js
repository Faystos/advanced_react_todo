import React, { useState, useEffect } from 'react';
import Sidebar from './componets/sidebar';
import Context from './context';

import TaskArea from './componets/taskArea';

import { lists, tasks, colors } from './store/mock/mock';




const  App = () => {  
  const [dataList, setDataList] = useState(null);
  const [dataTasks, setDataTasks] = useState(null);
  const [dataColors, setDataColors] = useState(null);
  const [selectTaskId, setSelectTaskId] = useState(null);
  
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

  const selectItemTask = idTask => {
    setSelectTaskId(selectTaskId => selectTaskId = idTask);    
  }

  const appContext = {
    dataList,
    dataTasks,
    dataColors,
    updateData,
    deleteTask,
    selectTaskId,
    selectItemTask,
  };
  
  return (
    <Context.Provider value = { appContext }>
      <div className = 'todo'>
        <Sidebar />     

        <div className = 'right'>
          <TaskArea />
        </div>

      </div>
    </Context.Provider>
  );
}
export default App;

import React, { useState, useEffect } from 'react';
import Sidebar from './componets/sidebar';
import Context from './context';

import TaskArea from './componets/taskArea';

import { lists, tasks, colors } from './store/mock/mock';




const  App = () => {  
  const [dataFolder, setDataFolder] = useState(null);
  const [dataTasks, setDataTasks] = useState(null);
  const [dataColors, setDataColors] = useState(null);
  const [selectTaskId, setSelectTaskId] = useState(null);
  
  useEffect(()=>{
    setDataFolder(dataFolder => dataFolder = lists);
    setDataTasks(dataTasks => dataTasks = tasks);
    setDataColors(dataColors => dataColors = colors);
  }, []);

  const addNewFolder = newTask => {
    const newData = [...dataFolder, newTask];    
    setDataFolder(data => data = newData);       
  }  

  const deleteFolder = id => {
    const newData = dataFolder.filter(task => task.id !== id);
    setDataFolder(data => data = newData);
  }

  const selectItemTask = idTask => {
    setSelectTaskId(selectTaskId => selectTaskId = idTask);    
  }

  const compledetTask = id => {
    const newDataTasks = dataTasks.filter(task => {
      if (task.id === id) {
        task.completed = true;
      };      
      return task;
    });
    setDataTasks(data => data = newDataTasks);
  }

  const deleteDoneTask = id => {
    const newData = dataTasks.filter(task => task.id !== id);
    setDataTasks(data => data = newData);
  }

  const appContext = {
    dataFolder,
    dataTasks,
    dataColors,
    addNewFolder,
    deleteFolder,
    selectTaskId,
    selectItemTask,
    compledetTask,
    deleteDoneTask,
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

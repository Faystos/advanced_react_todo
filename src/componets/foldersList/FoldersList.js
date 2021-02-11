import React, { useState, useContext } from "react";
import SvgIcon from '../svgIcon';
import Context from '../../context';

const FoldersList = ({ deleteFolder }) => {
  const { dataFolder, dataColors, selectItemTask } = useContext(Context);
  const [selectTask, setSelectTask] = useState(null);
  return (   
    <List
    dataFolder = { dataFolder } 
      dataColors = { dataColors } 
      deleteFolder = { deleteFolder } 
      setSelectTask = { setSelectTask } 
      selectTask = { selectTask }
      selectItemTask = {selectItemTask}/>  
  );
};

const List = ({ dataFolder, dataColors, deleteFolder, setSelectTask, selectTask, selectItemTask }) => {  
  return (
    dataFolder.map(({ id, name, colorId }) => {
      let activClassName = selectTask === id ? `sidebar__task_item--active` : '';
      const color = dataColors.filter(color => color.id === colorId)[0].name;

      return (
        <div className={ `sidebar__task_item ${activClassName}` } key={ id } onClick={ () => {
          setSelectTask(id);
          selectItemTask(id);
        }}>
          <div className='sidebar__task_info'>
            <span className={ `sidebar__task_color sidebar__task_color--${ color }` }></span>
            <span className='sidebar__task_title'>{ name }</span>
          </div>
          <button type = 'button' className = 'sidebar__task_del' onClick = { () => deleteFolder(id) }>
            <SvgIcon name = { 'close' } color = { '#e3e3e3' } size = { 10 } className = { '' }/>
          </button>        
        </div>
      );
    })
  );  
};

 export default FoldersList;
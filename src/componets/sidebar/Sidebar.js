import React, { useState, useContext } from 'react';
import ButtonControl from '../buttonControl';
import SvgIcon from '../svgIcon';
import AddFolder from '../addFolder';
import FoldersList from '../foldersList';
import Context from '../../context';

const Sidebar = () => {
  const { dataFolder, addNewFolder, deleteFolder } = useContext(Context);  
  const [activePopup, setActivePopup] = useState(false);
  const handlerPopup = () => {
    setActivePopup(!activePopup);    
  };
  const folderList = dataFolder ? <FoldersList deleteFolder = { deleteFolder }/> : null; 

  return (
    <div className = 'sidebar'>
      <div className = 'sidebar__all_task'>
        <ButtonControl svg = { <SvgIcon name={ 'all' } color = { '#7c7c7c' } size = { 18 } className = { '' }/> } text = { `Все задачи` }/>
      </div>
      <div className = 'sidebar__tasks'>
        { folderList }
      </div>
      <AddFolder handlerPopup = { handlerPopup } activePopup = { activePopup } addNewFolder = { addNewFolder }/>       
    </div>
  );
};

export default Sidebar;
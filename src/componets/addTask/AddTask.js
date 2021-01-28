import React, { useState, useContext } from "react";
import SvgIcon from '../svgIcon';
import ButtonControl from '../buttonControl';
import FormAddTask from '../formAddTask';
import BlockRadioInputs from '../BlockRadioInputs';
import Context from '../../context';

const AddTask = ({handlerPopup, activePopup, data, updateData}) => {

  const {dataList, dataColors} = useContext(Context);

  const [nameTask, setNameTask] = useState('');
  const [taskColor, setTaskColor] = useState('');

  const handlerInputNameTask = (value) => {
    setNameTask(nameTask => nameTask = value);    
  }

  const handlerInputColorTask = (value) => {
    setTaskColor(taskColor => taskColor = value);    
  }

  const addNewTask = evt => {
    evt.preventDefault();
    updateData({
      id: `${dataList.length + 1}`,      
      name: nameTask,
      colorId: dataColors.filter(({name})=> name === taskColor)[0].id,    
    });    
  }

  const PoPup = (
    <div className='sidebar__add_task_popup'>
        <button type='button' className='sidebar__add_task_popup_close' onClick={() => handlerPopup()}><SvgIcon name={'close'} color={'#ffff'} size={7} className={''}/></button>
        <FormAddTask nameTask ={nameTask} handlerInputText={handlerInputNameTask} addNewTask={addNewTask}>
          <BlockRadioInputs handlerInputRadio={handlerInputColorTask}/>
        </FormAddTask>
      </div>
  ); 

  const vuePoPup = activePopup ? PoPup : null;


  return (
    <div className='sidebar__add_task'>
      <ButtonControl svg={<SvgIcon name={'add'} color={'#7c7c7c'} size={10} className={''}/>} text={`Добавить папку`} handler={handlerPopup}/>
      {vuePoPup}          
    </div>
  );  
}

export default AddTask;
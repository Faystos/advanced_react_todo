import ButtonControl from './componets/buttonControl';
import SvgIcon from './componets/svgIcon';
import arrMocks from './store/mock/mock';

const  App = () => {

  console.log(arrMocks);

  const tasksList = arrMocks.map(({id, name, color}) => {
    return (
      <div className='todo__task_item' key={id}>
        <div className='todo__task_info'>
          <span className={`todo__task_color todo__task_color--${color}`}></span>
          <span className='todo__task_title'>{name}</span>
        </div>
        <button type='button' className='todo__task_del'><SvgIcon name={'close'} color={'#e3e3e3'} size={10} className={''}/></button>        
      </div>
    );
  });
  ;
  return (
    <div className='todo'>
      <div className='todo__sidebar'>
        <div className='todo__all_task'>
          <ButtonControl svg={<SvgIcon name={'all'} color={'#7c7c7c'} size={18} className={''}/>} text={`Все задачи`}/>
        </div>
        <div className='todo__tasks'>
          {tasksList}
        </div>
        <div className='todo__add_task'>
          <ButtonControl svg={<SvgIcon name={'add'} color={'#7c7c7c'} size={10} className={''}/>} text={`Добавить папку`}/>
        </div>
      </div>

      <div className='right'>

      </div>
    </div>
  );
}
export default App;

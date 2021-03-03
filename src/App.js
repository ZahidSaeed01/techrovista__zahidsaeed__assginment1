import React,{Component} from 'react'
import './App.css';
import AllTasks from './components/ToDo/AllTasks'
import Aux from './hoc/Auxx'
import Modal from './components/UI/Modal/Modal'
import AddTask from './components/ToDo/AddTask.js/AddTask';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        tasks: [],
        title:'',
        toDo:'',
        count:0,
        addTask:false,
    }
}

handleShowAddTask=()=>{
  const addTast=true;
  const title='';
  const toDo='';
  this.setState({addTask:addTast,title,toDo})
}

cancleAddTaskHandler=()=>{
  const addTast=false;
  this.setState({addTask:addTast})
}

handleChange=(e)=>{
this.setState({[e.target.name]:e.target.value})
}

handleAddNewTask=()=>{
  let task={};
  task.id=this.state.count+1;
  task.title=this.state.title;
  task.toDo=this.state.toDo;

  const tasks=this.state.tasks;
  this.setState({tasks:[task,...tasks],title:'',toDo:'',count:task.id})
}

handleDeleteAllTask=()=>{
  const tasks=[]
  this.setState({tasks:tasks})
}

handleDeleteTask=(id)=>{
  const updatedTasks=this.state.tasks;
  const tasks=updatedTasks.filter(task=>task.id!==id);
  this.setState({tasks:tasks});
}

handleUpdateTast=(task)=>{
  const allTasks=this.state.tasks;
  const addTask=true;
  const title=task.title;
  const toDo=task.toDo;
  const tasks=allTasks.filter(t=>t!==task);
  this.setState({addTask,title,toDo,tasks})
}

render(){

  const task={
    title:this.state.title,
    toDo:this.state.toDo
  }

  return (
    <div className="App">
      <div className='App-header'>
        <Aux>
          <Modal show={this.state.addTask} modalClosed={this.cancleAddTaskHandler}>
            <AddTask 
              handleAddNewTask={this.handleAddNewTask}
              task={task}
              handleChange={this.handleChange}
              modalClosed={this.cancleAddTaskHandler}
            />
          </Modal>
          <AllTasks 
            handleShowAddTask={this.handleShowAddTask}
            handleDeleteAllTask={this.handleDeleteAllTask}
            handleDeleteTask={this.handleDeleteTask}
            handleUpdateTast={this.handleUpdateTast}
            tasks={this.state.tasks}
          />       
        </Aux>
      </div>
         
    </div>
  );
}
}

export default App;
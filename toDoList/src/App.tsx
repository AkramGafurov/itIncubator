import { ftruncate } from 'fs';
import React, {useState} from 'react';
import './App.css';
import ToDoLIst from './ToDoLIst';
import {TaskType} from './ToDoLIst'

export type FilterValuesType = 'all' |'active'| 'completed'  

// export function Counter(){
    // let arr = useState(5);
    // let number = arr[0];
    // let setState = arr[1];

    // return(
    //     <div onClick = {()=>setState(number+1)}>{number}</div>
    // )
// }

function App() {
 
    const arr = useState([
        {id: 1, title: 'HTML&CSS', isDone: true,},
        {id: 2, title: 'JS', isDone: true,},
        {id: 3, title: 'ReactJS', isDone: false,},
        {id: 4, title: 'Redux', isDone: false,}
    ]);

    let tasks = arr[0];
    let setTasks = arr[1];

    function deleteTask(id:number) {
        let filtredTasks = tasks.filter(item => item.id != id);
        setTasks(filtredTasks)
    }

    const [filter, setFilter] = useState<FilterValuesType>('all')

    function changeFilter(filter:FilterValuesType){
        setFilter(filter)
    }

    let taskForToDoList = tasks;
    if (filter == 'completed'){
        taskForToDoList = tasks.filter(item => item.isDone === true)
    } 

    if(filter === 'active'){
        taskForToDoList = tasks.filter(item => item.isDone !== true);
    }

    if(filter === 'all'){
        taskForToDoList = tasks
    }

    return (
        <div className='App'>
            <ToDoLIst
                title={'Learn'} 
                tasks={taskForToDoList}
                deleteTask={deleteTask}
                changeFilter = {changeFilter}
            />
        </div>

    );
}

export default App;

import { ftruncate } from 'fs';
import React, {useState} from 'react';
import { v1 } from 'uuid';
import './App.css';
import ToDoLIst from './ToDoLIst';
import {TaskType} from './ToDoLIst'
export type FilterValuesType = 'all' |'active'| 'completed'  


function App() {
 
    const [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML&CSS', isDone: true,},
        {id: v1(), title: 'JS', isDone: true,},
        {id: v1(), title: 'ReactJS', isDone: false,},
        {id: v1(), title: 'Redux', isDone: false,},
        {id: v1(), title: 'GraphQL', isDone: false,}

    ]);

    function deleteTask(id:string) {
        let filtredTasks = tasks.filter(item => item.id != id);
        setTasks(filtredTasks)
    }

    const [filter, setFilter] = useState<FilterValuesType>('all')

    function changeFilter(filter:FilterValuesType){
        setFilter(filter)
    }

    // -------добавление сообщений через инпут-------
    let [userInput, setUserInput] = useState('');
    

    const addTask = () => {
        let newTask = {id: v1(), title: userInput, isDone: true,}
        setTasks([newTask, ...tasks])
        setUserInput('')
    }

    // -------проверка фильтров-------

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
                addTask = {addTask}
                userInput = {userInput}
                setUserInput = {setUserInput}
            />
        </div>

    );
}

export default App;

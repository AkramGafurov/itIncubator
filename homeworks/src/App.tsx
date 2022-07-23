import React, {useState} from 'react';
import './App.css';
import ToDoLIst from './ToDoLIst';
import {TaskType} from './ToDoLIst'

export type FilterValuesType = 'all' | 'completed' | 'active'


function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML&CSS', isDone: true,},
        {id: 2, title: 'JS', isDone: true,},
        {id: 3, title: 'ReactJS', isDone: false,},
        {id: 4, title: 'Redux', isDone: false,}
    ]);
    const [filter, setFilter] = useState<FilterValuesType>('all')


    function removeTask(id: number) {
        let filtredTasks = tasks.filter(item => {
            return item.id !== id
        })
        setTasks(filtredTasks);
    }

    // ------------------------------------------

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }

    let tasksForToDoList = tasks;
    if (filter == 'completed') {
        tasksForToDoList = tasks.filter(item => item.isDone === true)
    }
    if (filter == 'active') {
        tasksForToDoList = tasks.filter(item => item.isDone === false)
    }

    // ------------------------------------------

    return (
        <div className='App'>
            <ToDoLIst
                title={'Learn'}
                tasks={tasksForToDoList}
                removeTask={removeTask}
                setFilter={setFilter}
                // showAllTasks={showAllTasks}
                // showActiveTasks = {showActiveTasks}
                // showCompletedTasks = {showCompletedTasks}
            />
        </div>

    );
}

export default App;

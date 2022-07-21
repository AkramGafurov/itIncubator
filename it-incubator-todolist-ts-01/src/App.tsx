import React from 'react';
import './App.css';
import ToDoLIst from './ToDoLIst';
import {TaskType} from './ToDoLIst'

// import ToDoLIst, {TaskType} from "./ToDoLIst";
//
// function App() {
//     const tasks: Array<TaskType> = [
//         {id: 1, title: 'HTML', isDone: true},
//         {id: 2, title: 'CSS', isDone: true},
//         {id: 3, title: 'TJS/S', isDone: false},
//     ]
//     return (<div>
//         <ToDoLIst title={'test1'} tasks={tasks}
//         />
//
//
//     </div>)
// }

// type TaskType = {
//     id: number,
//     isDone: boolean,
//     title:string,
// }


function App() {
    const tasks: Array<TaskType> = [{id: 1, isDone: true, title: 'HTML',}, {id: 2, isDone: true, title: 'CSS',}, {
        id: 3,
        isDone: false,
        title: 'REACT',
    }]


    return (
        <div>
            <ToDoLIst title={'Learn'}  tasks = {tasks} />
            {/*<ToDoLIst title={'watch'} tasks = {tasks}/>*/}
            {/*<ToDoLIst title={'homework'} tasks = {tasks}/>*/}
        </div>

    );
}

export default App;

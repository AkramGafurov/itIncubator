import React from "react";
import  {FC} from 'react'

// type TodoListPropsType = {
//     title: string,
//     tasks: Array<TaskType>
// }
//
// export type  TaskType = {
//     id: number,
//     title: string,
//     isDone: boolean,
// }
//
// const ToDoLIst/*: FC<TodoListPropsType> можно типизировать и так*/ = (props: TodoListPropsType) => {
//     return (
//         <div>
//             <h3>{props.title}</h3>
//             <div>
//                 <input/>
//                 <button>+</button>
//             </div>
//             <ul>
//                 <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
//                 <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
//                 <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>
//             </ul>
//             <div>
//                 <button>All</button>
//                 <button>Active</button>
//                 <button>Completed</button>
//             </div>
//         </div>
//     );
// }
//
// export default ToDoLIst;

type ToDoListType = {
    title: string,
    tasks: Array<TaskType>,
}

export type TaskType = {
    id: number,
    isDone: boolean,
    title:string,
}

const ToDoLIst:FC<ToDoListType> = (props) => {
    return (
        <>
            <div className="App">
                <div>
                    <h3>{props.title}</h3>
                    <div>
                        <input/>
                        <button>+</button>
                    </div>
                    <ul>
                        <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
                        <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
                        <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[2].title}</span></li>
                    </ul>
                    <div>
                        <button>All</button>
                        <button>Active</button>
                        <button>Completed</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default  ToDoLIst;




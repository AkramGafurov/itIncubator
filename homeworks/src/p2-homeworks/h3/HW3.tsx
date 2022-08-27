import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid'

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {

    const [users, setUsers] = useState<Array<UserType>>([]) // 

    // добавление имени в массив пользователей при нажатии на add на onClick
    const addUserCallback = (name: string) => { 
        let newUser = {_id:v1(),name: name}
        setUsers([newUser, ...users])
    }

    return (
        <div>
            <hr/>
            <h2>Homeworks 3</h2>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    )
}

export default HW3

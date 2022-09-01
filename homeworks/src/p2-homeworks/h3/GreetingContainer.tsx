import React, {useState, ChangeEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void// need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    
    const [name, setName] = useState<string>('') // need to fix any

    const [error, setError] = useState<string>('') // need to fix any

    // контроль измения Input на onChange
    const setNameCallback = (event:ChangeEvent<HTMLInputElement>) => { // need to fix any
        let userInput = event.currentTarget.value
        setName(userInput) // need to fix        
    }

    // контроль нажатия button add на onChange
    const addUser = () => {
        if(name == ''){
            setError('Обязательно для заполнения');
            return;
        }
        addUserCallback(name);
        setError('');
        setName('')
        alert(`Hello  ${name}!`) // need to fix        
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer

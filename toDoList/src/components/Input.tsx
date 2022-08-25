import React from "react";
import {ChangeEvent, KeyboardEvent} from "react"

type inputPropsType = {
  userInput: string,
  setUserInput: (userInput:string) => void,
  addTask: () => void
}

export const Input = (props: inputPropsType) => {

  const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    let userInput = event.currentTarget.value;    
    props.setUserInput(userInput);
  }

  const onKeyPressHandler = (event:KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      props.addTask()
    }
  }

  return(
  <input value={props.userInput} onChange = {onChangeHandler} onKeyDown={onKeyPressHandler}/>  
  )
}


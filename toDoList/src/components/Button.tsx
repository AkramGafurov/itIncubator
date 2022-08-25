import React from "react";

type buttonPropsType = {
  name: string,
  callBack: () => void,
}

export const Button = (props: buttonPropsType) => {

  const buttonHandler = () => {
    props.callBack()
  }

  return(
    <button onClick={buttonHandler}>{props.name}</button>
  )
  
}


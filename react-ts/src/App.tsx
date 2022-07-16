import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <TitleApp />
        <Rating />
        <Accordion />
    </div>
  );
}

function  Star(){
    return (
        <div>Star</div>
    )
}

function Rating() {
  return (
      <>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
      </>
  );
}
function  Accordion(){
  return (
      <div>
          <AccordionTitle/>
          <AccordionBody/>
      </div>
  )
}
function TitleApp() {
    return <>This is APP component</>
}
function AccordionTitle(){
    return(
        <h3>menu</h3>
    )
}
function AccordionBody(){
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default App;


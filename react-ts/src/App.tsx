import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>This is APP component
        <Rating />
        <Acordion />
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
      <div>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
      </div>
  );
}

function  Acordion(){
  return (
      <div>
        <h3>menu</h3>
          <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
          </ul>
      </div>
  )
}

export default App;

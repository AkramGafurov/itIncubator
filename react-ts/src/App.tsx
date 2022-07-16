import React from 'react';
import './App.css';
import Accordion from "./components/accordion/Accordion";
import Rating from "./components/rating/Rating";

function App() {
  return (
    <div>
        <TitleApp title = {'This is APP component'}/>
        <TitleApp title = {'My Friends'}/>
        Article 1
        <Rating value = {5}/>
        <Accordion accordionTitle = {'Menu'} collapsed = {false}/>
        <Accordion accordionTitle = {'User'} collapsed = {true}/>

        Article 2
        <Rating value = {2}/>
    </div>
  );
}

type TitleAppPropsType = {
    title: string
}

function TitleApp(props: TitleAppPropsType) {
    return <h1>{props.title}</h1>
}

export default App;


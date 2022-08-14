import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { DialogType, MessageType, PostType, PostPageType, DialogPageType, AppType, StateType} from "./Components/Redux/Type"

function App(props: StateType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="profile" element={<Profile posts={props.state.postPage.posts}/>}/>
                        <Route path="dialogs" element={<Dialogs dialogs={props.state.messagePage.dialogs} messages={props.state.messagePage.messages}/>}/>            
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

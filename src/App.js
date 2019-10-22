import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Route from "react-router-dom/es/Route";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route exact path="/dialogs" render={() => <DialogsContainer
                    store={props.store}/>}/>
                <Route exact path="/profile" render={() => <Profile
                    store={props.store}/>
                }/>
            </div>
        </div>
    );

};

export default App;

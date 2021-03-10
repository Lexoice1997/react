import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from "./components/Friends/Friends";
import {Route} from 'react-router-dom';


const App = (props) => {
    return (
        <div className='wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper">
                <Route path='/messages' render={() => <Dialogs state={props.state.dialogsPage} addMessage={props.addMessage} newMessageText={props.newMessageText}  newSms={props.state.dialogsPage.newMessage}/>}/>
                <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost} newPostText={props.newPostText}/>}/>
                <Route path='/News' component={News}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Settings' component={Settings}/>
                <Route path='/Friends' render={() => <Friends/>}/>
            </div>

        </div>

    );
}

export default App;

import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addMessage, newMessageText, newPostText, subscribe} from './redux/state';
import {addPost} from './redux/state';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} newPostText={newPostText} addMessage={addMessage} newMessageText={newMessageText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree())



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

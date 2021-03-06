import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper">
                    <Route path='/messages' component={Messages}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;

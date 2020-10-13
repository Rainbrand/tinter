import React from 'react';
import './App.css';
import Header from "./components/Header";
import Cards from "./components/Cards";
import Buttons from "./components/Buttons";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Chats from "./components/Chats";
import {useSelector} from "react-redux";
import ChatScreen from "./components/ChatScreen";


function App() {
    const user = useSelector(state => state.user)

    return (
        <div className="App">
            <BrowserRouter>
                {user?
                    <Switch>
                        <Route path="/chats" exact>
                            <Header/>
                            <Chats/>
                        </Route>
                        <Route path="/" exact>
                            <Header/>
                            <Cards/>
                            <Buttons/>
                        </Route>
                        <Route path="/chats/:name" exact>
                            <ChatScreen/>
                        </Route>
                    </Switch>
                    :
                    <h1>Not logged in</h1>
                }
            </BrowserRouter>
        </div>
    );
}

export default App;

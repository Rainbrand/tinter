import React from 'react';
import './App.css';
import Header from "./components/Header";
import Cards from "./components/Cards";
import Buttons from "./components/Buttons";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Chats from "./components/Chats";
import ChatHeader from "./components/ChatHeader";
import ChatScreen from "./components/ChatScreen";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
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
                    <Chat/>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

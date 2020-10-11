import React from "react";
import "./ChatScreen.scss"
import ChatHeader from "./ChatHeader";
import Chat from "./Chat";

function ChatScreen(){
    return(
        <div className="chat-screen">
            <ChatHeader/>
            <Chat/>
        </div>
    )
}

export default ChatScreen;
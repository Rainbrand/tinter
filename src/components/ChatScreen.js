import React, {useEffect, useRef, useState} from "react";
import "./ChatScreen.scss"
import ChatHeader from "./ChatHeader";
import Message from "./Message";
import {useSelector} from "react-redux";

function ChatScreen(){
    const [messages, setMessages] = useState([{id:1, sender: 12, text: "Texsssssssssssssssssssssssssssssssssssssssssssssssssssssssst"}]) //sender is a placeholder for logged user
    const user = useSelector(state => state.user)
    const [input, setInput] = useState("");
    const messagesEnd = useRef(null)

    useEffect(() =>{
        messagesEnd.current.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    return(
        <div className="chatScreen">
            <ChatHeader/>
            <div className="chatScreen__messages">
                {messages.map(msg => (
                    <Message msg={msg.text} sender={msg.sender} key={msg.id}/>
                ))}
                <div ref={messagesEnd}/>
            </div>

            <div className="chatScreen__input">
                <form className="chatScreen__form">
                    <input onChange={event => setInput(event.target.value) } value={input} placeholder="Text message"/>
                    <button type="submit" onClick={event => {
                        event.preventDefault()
                        if (input) {
                            setMessages(prevState => {
                                const state = [...prevState].concat([{id: Math.random(), sender: user, text: input}])
                                setInput("")
                                return state
                            })
                        }
                    }}/>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen;
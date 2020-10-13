import React from 'react'
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import "./Message.scss"

function Message(props){
    const currentChat = useSelector(state => state.currentChat)
    const user = useSelector(state => state.user)

    let className = "message";
    let avatar = currentChat.avatar

    if (props.sender === user){
        return (
            <div className="message message--self">
                <p className="message__text">
                    {props.msg}
                </p>
                <small className="message__timestamp">{props.timestamp}</small>
            </div>
        )
    }

    return (
        <div className={className}>
            <Avatar src={avatar} alt={currentChat.name}>
                {currentChat.name.slice(0, 1)}
            </Avatar>
            <p className="message__text">
                {props.msg}
            </p>
            <small className="message__timestamp">{props.timestamp}</small>
        </div>
    )
}

export default Message

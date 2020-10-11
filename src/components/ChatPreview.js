import React from "react";
import "./ChatPreview.scss"
import {Avatar} from "@material-ui/core";
import TextTruncate from "react-text-truncate";

function ChatPreview({name, msg, avatar}){
    return(
        <div className="chat-preview">
            <Avatar className="chat-preview__avatar" src={avatar} alt={name}>{name.slice(0, 1)}</Avatar>
            <div className="chat-preview__text">
                <p className="chat-preview__name">{name}</p>
                <TextTruncate line={1} element="p" truncateText="..." text={msg}/>
            </div>
        </div>
    )
}

export default ChatPreview
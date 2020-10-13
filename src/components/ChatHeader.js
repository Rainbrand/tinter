import React from "react";
import "./ChatHeader.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {IconButton} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import setCurrentChat from "../store/actions/setCurrentChat";
import {Avatar} from "@material-ui/core";

function ChatHeader(){
    const dispatch = useDispatch()
    const currentChat = useSelector(store => store.currentChat)

    return(
        <div className="chat-header">
            <Link to="/chats" onClick={() => dispatch(setCurrentChat({id: null, name: null}))}>
                <IconButton fontSize="large" >
                    <ArrowBackIosIcon />
                </IconButton>
            </Link>
            <Avatar className="chat-header__avatar" src={currentChat.avatar} alt="avatar">
                {currentChat.name.slice(0, 1)}
            </Avatar>
            <h2 className="chat-header__name">
                {currentChat.name}
            </h2>
        </div>
    )
}

export default ChatHeader
import React from "react";
import "./ChatHeader.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {IconButton} from "@material-ui/core";
import {Link} from "react-router-dom";
import store from "../store/store";

function ChatHeader(){
    return(
        <div className="chat-header">
            <Link to="/chats">
                <IconButton fontSize="large">
                    <ArrowBackIosIcon />
                </IconButton>
            </Link>
        </div>
    )
}

export default ChatHeader
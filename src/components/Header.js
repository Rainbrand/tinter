import React from "react";
import "./Header.scss"
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link, useHistory} from "react-router-dom";


function Header(){
    return(
        <div className="header">
            <Link to="/">
                <i className="fas fa-tint fa-2x"/>
            </Link>
            <Link to="/liked">
                <FavoriteIcon fontSize="large"/>
            </Link>
            <Link to="/chats">
                <QuestionAnswerIcon fontSize="large"/>
            </Link>
            <Link to="/profile">
                <PersonIcon fontSize="large"/>
            </Link>
        </div>
    )
}

export default Header
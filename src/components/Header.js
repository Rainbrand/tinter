import React from "react";
import "./Header.scss"
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import FavoriteIcon from '@material-ui/icons/Favorite';


function Header(){
    return(
        <div className="header">
            <i className="fas fa-tint fa-2x"/>
            <FavoriteIcon fontSize={"large"}/>
            <QuestionAnswerIcon fontSize={"large"}/>
            <PersonIcon fontSize={"large"}/>
        </div>
    )
}

export default Header
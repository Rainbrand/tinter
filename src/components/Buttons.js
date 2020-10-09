import React from "react";
import "./Buttons.scss"
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import ClearIcon from '@material-ui/icons/Clear';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from "@material-ui/core/IconButton";

function Buttons(){
    return(
        <div className="buttons buttons__container">
            <IconButton style={{width: "40px", height: "40px"}} fontSize="large">
                <KeyboardReturnIcon className="buttons__return-button"/>
            </IconButton>
            <IconButton>
                <ClearIcon className="buttons__nope-button" fontSize="large"/>
            </IconButton>
            <IconButton style={{width: "40px", height: "40px"}} fontSize="large">
                <StarIcon className="buttons__star-button"/>
            </IconButton>
            <IconButton>
                <FavoriteIcon className="buttons__like-button" fontSize="large"/>
            </IconButton>
            <IconButton style={{width: "40px", height: "40px"}} fontSize="large">
                <FlashOnIcon className="buttons__flash-button"/>
            </IconButton>
        </div>
    )
}

export default Buttons

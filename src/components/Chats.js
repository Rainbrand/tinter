import React, {useState} from "react";
import "./Chats.scss"
import ChatPreview from "./ChatPreview";
import {Link} from "react-router-dom";

function Chats(){
    const [chats, setChats] = useState([{id: 1, name: "Lorem", avatar: "https://picsum.photos/50/50", msg: "Ipsum"},
        {id:2, name: "Lorem2", avatar: "https://picsum.photos/50/50", msg: "Ipsum2" }])

    return(
        <div className="chats">
            {chats.map(chat =>
                <Link key={chat.id} to={"chats/"+chat.id}>
                    <ChatPreview name={chat.name} msg={chat.msg} avatar={chat.avatar}/>
                </Link>
            ) }
        </div>
    )
}

export default Chats
import React, { useState, useEffect } from 'react'
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    
    }, []);
    
const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed >>> ", input); 
    
    setInput("");
};

    return (
        <div className="chat">
            <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

        <div className="chat_headerInfo">
            <h3>Room name</h3>
            <p>Last seen at ...</p>
        </div>
        <div classNmae="chat_headerRight">
            <IconButton>
            <SearchIcon />
            </IconButton>
            <IconButton>
            <AttachFileIcon />
            </IconButton>
             <IconButton>
                 <MoreVertIcon />
             </IconButton>
            
        </div>
        </div>
        <div className="chat_body"> 
        <p className={`chat_message ${true &&
        "chat_reciever"}`}>
        <span className="chat_name"> Someone
       </span>
        Hello

        <span className="chat_timestamp"> 3:55pm </span>
        </p>     
        


        </div>

        <div className="chat_footer">
        <InsertEmoticonIcon />
        <form> 
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
            <button onClick={sendMessage}
            type="submit">Send a message </button>
        </form>
        <MicIcon />
        </div>
        </div>
    ); 
}

export default Chat

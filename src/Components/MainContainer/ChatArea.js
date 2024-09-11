import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton  } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MessageSelf from './MessageSelf';
import MessageOthers from './MessageOthers';


function ChatArea({ props }) {

    // const messageProps = {
    //     name: 'John Doe',
    //     timeStamp: '12:30 PM',
    //     message: 'Hello, how are you?',
    //     // Add other required properties here
    //   };



  return (
    <div className='chatArea-container'>
        <div className='chatArea-header'>
            <p className='con-icon'>{props.name[0]}</p>
            <div className='header-text'>
                <p className='con-title'>{props.name}</p>
                <p className='con-timeStamp'>{props.timeStamp}</p>
            </div>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </div>
        <div className='messages-container'>
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
        </div>
        <div className='text-input-area'>
            <input type='text' placeholder='Type a message...' className='search-box'/>
            <IconButton>
                <SendIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default ChatArea
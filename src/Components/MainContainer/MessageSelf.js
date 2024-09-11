import React from 'react'

function MessageSelf() {
    var props2 = { name: "You", message: "This is a sample" }
    
    return (
        <div className='self-message-container'>
            <div className='messageBox'>
                <p>{props2.message}</p>
                <p className='self-timeStamp'>12:08am</p>
            </div>
        </div>
    )
}

export default MessageSelf
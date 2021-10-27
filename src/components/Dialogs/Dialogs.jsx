import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dialogs.css';

const Messages = (props) => {
    return (
        <div className='Messg__item'>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>

    )
}
const Notice = (props) => {
    return (
        <div className='Chat__item'>{props.notice}</div>
    )
}
const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElement = state.dialogsData
        .map(dialog => <Messages name={dialog.name} id={dialog.id} />)

    let chatElements = state.chatData
        .map(chat => <Notice notice={chat.message} />)


    let newMessageBody = state.newMessageBody;

    const onSendMessage = () => {
        props.sendMessage();
    }

    const onNewMessagechange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className='Messg'>
            <div className='Messg__items'>
                {dialogsElement}
            </div>
            <div className='Chat'>
                <div>{chatElements}</div>
                <div>
                    <div><input onChange={onNewMessagechange} value={newMessageBody} type="text" placeholder='Enter you message' /></div>
                    <div><button onClick={onSendMessage}>Send</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;
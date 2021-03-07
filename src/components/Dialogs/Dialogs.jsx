import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {


    let dialogsElements =
        props.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>);

    let messagesElements =
        props.messages.map(message => <Messages message={message.message} id={message.id}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;

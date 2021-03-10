import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
        props.newMessageText('');
    };

    let newPostChange = () => {
        let text = newMessageElement.current.value;
        props.newMessageText(text);
    };

    let messagesElements =
        props.state.messages.map(message => <Messages message={message.message} id={message.id}/>);

    let dialogsElements =
        props.state.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}

                <div>
                    <textarea onChange={newPostChange} ref={newMessageElement} value={props.newSms}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Жми</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import React from 'react';

let inptSend = React.createRef();

function Dialogs(props){

let dialogsElements = props.dialogsPage.dialogsFriendData.map( dialog =>
<Dialog NameUser={dialog.NameUser} id={dialog.id} imgSrc={dialog.imgSrc} key={dialog.id} />);
let messagesElements = props.dialogsPage.messageForDialogsData.map( message =>
<Message textMessage={message.textMessage} key={message.id} />);

function onSendMessageClick(){
  props.onSendMessageClick();
  inptSend.current.value = "";
}

function onKeyPressHandler(event) {
if (event.keyCode === 13) {
  onSendMessageClick();
 }
 }

function onNewMessageChange(e){
let body = e.target.value;
props.onNewMessageChange(body);
}
return(
<div className={s.dialogs}>
   <div className={s.dialogsItems}>
      {dialogsElements}
   </div>
   <div className={s.messages}>
      {messagesElements}
      <div className={s.inpt_and_btn}>
         <div className={s.div_for_input}><input className={s.input}  onChange = { onNewMessageChange } onKeyDown={ onKeyPressHandler }  type="text" name="" id="" ref={ inptSend } /></div>
         <div className={s.div_for_btn}><button className={s.button} onClick = { onSendMessageClick }></button></div>
      </div>
   </div>
</div>
)
}

export default Dialogs;
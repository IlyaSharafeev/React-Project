import React from 'react';
import s from './Form.module.css';


let newPostTextArea = React.createRef();
let newPostName = React.createRef();
let newPostEmail = React.createRef();

function Form(props){
   
   function addPost(){
   props.addPost(newPostName.current.value);
   newPostTextArea.current.value = '';
   newPostName.current.value = '';
   newPostEmail.current.value = '';
   }

   function onChangeText(){
   props.onChange(newPostTextArea.current.value);
   }

   return(
   <form>
      <input ref={newPostName} name="name" placeholder="What is your name?" className={s.name} required />
      <input ref={newPostEmail} name="emailaddress" placeholder="What is your email?" className={s.email} type="email"
         required />
      <textarea onChange={onChangeText} ref={newPostTextArea} rows="4" cols="50" name="subject"
         placeholder="Please enter your message" className="message" required value={props.newPostText} />
      <input name="submit" className={s.btn} type="button" value="Send" onClick={ addPost } />
   </form>
   )
   }

export default Form;
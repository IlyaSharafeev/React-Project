import s from './Input.module.css';

function Input(props){
   return(
      <div className={s.block__input}>
         <p className={s.title__upper__inpt}>{props.title}</p>
         <input type="text" />
      </div>
   )
}

export default Input;
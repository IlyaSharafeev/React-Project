import s from './Main.module.css';
import Input from './Block_Input/Input';

function Main(props){
   let InputElements = props.ProfilePage.map( post =>
  <Input title={post.title}/> )

   return(
      <div className={s.block__main}>
            <div className={s.form}>
               {InputElements}
               <div className={s.block__btn}>
                  <button className={s.btn}>Save</button>
               </div>
            </div>
         </div>
   )
}

export default Main;
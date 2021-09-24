import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';


function Dialog(props){
return(
<div className={s.dialog}>
   <div>
      <img className={s.imgAvatar} src={props.imgSrc} alt="" />
   </div>
   <div className={s.div_name}>
      <NavLink className={s.name} to={"/dialogs/" + props.id}>{props.NameUser}</NavLink>
   </div>
</div>
)
}

export default Dialog;
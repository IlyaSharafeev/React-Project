import s from './ProfileInfo.module.css';
import Preloader from '../GeneralComponents/Preloader'

function ProfileInfo(props){
   
   if(!props.profile){
      return Preloader
   }

   return(
      <div className={s.fon}>
         <div>{props.profile.fullName}</div>
         <div>Обо мне: {props.profile.aboutMe} </div>
         <div>Контакты: <a href={props.profile.contacts.facebook}>facebook</a> , <a href={props.profile.contacts.vk}>vk</a> </div>
         <div><img className={s.imgLarge} src={props.profile.photos.large} alt="" /></div>
         <div><img className={s.imgSmall} src={props.profile.photos.small} alt="" /></div>
      </div>
   )
}

export default ProfileInfo;
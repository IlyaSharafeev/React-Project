
import s from './Profile.module.css';
import Sidebar from './Sibebar/Sidebar';
import Main from './Main/Main';
import { Redirect } from 'react-router-dom';


function Profile(props){

   if (!props.isAuth) return <Redirect to={"/login"} />

   return(
      <div className={s.wrapper}>
         <Sidebar Sidebar={props.sidebar}/>
         <Main ProfilePage={props.titleInput}/>
      </div>
   )
}

export default Profile;
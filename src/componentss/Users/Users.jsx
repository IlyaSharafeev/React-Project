import s from './Users.module.css';
import userPhoto from '../../photo/userPhoto.png'
import { NavLink } from 'react-router-dom';


function Users(props){

let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

let pages = [];
    for(let i = 1; i <= pagesCount; i++){
    pages.push(i); 
    } 
    
    return( 
       <div className={s.main}>
   {
   props.users.map( u =>
   <div className={s.blockUser}>

      <div className={s.blockImg}>
         <NavLink to={'/profileInfo/' + u.id}>
            <img src={u.photos.small !=null ? u.photos.small: userPhoto} alt="" />
         </NavLink>
      </div>


      <div className={s.blockText}>
         <div className={s.blockName}>
            <div className={s.name}>
               <div>{u.name}</div>
            </div>
            <div className={s.name}>
               <div>{u.surname}</div>
            </div>
         </div>

         <div className={s.blockStatus}>
            <div className={s.status}>
               <div>{u.status == null ? "is hidden": null}</div>
            </div>
         </div>

         <div className={s.blockLocation}>
            <div className={s.locationUser}>
               <div className={s.country}>"u.location.country"</div>
               <div className={s.city}>"u.location.city"</div>
            </div>
         </div>
      </div>


      <div className={s.blockBtn}>
         {u.followed 
         ? <button disabled={props.followingInProgress.some( id => id === u.id )} onClick={ ()=> { 
            props.unfollow(u.id);
         }}>unsubscribe</button>

         : <button disabled={props.followingInProgress.some( id => id === u.id )} onClick={ ()=> { 
            props.follow(u.id);
            } }>subscribe</button>}
      </div>
  
   </div>
   )
   }

   <div className={s.pageNumber}>
      {pages.map( p => {
      return <span className={ props.currentPage === p && s.selectedPage } onClick={ (e)=> {
         props.onPageChanged(p)
         }}>{p}</span>
      })}
   </div>

   </div>
   )
   }

   export default Users;
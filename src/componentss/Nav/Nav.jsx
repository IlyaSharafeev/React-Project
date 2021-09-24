import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

function Nav(props){
return(
<div className={s.nav}>
   <nav>
      <div className={s.logo}>Beta 1.0</div>

      <ul className={s.menu}>

         <li className={s.login}><NavLink to="/login">Login</NavLink></li>

         {/* Home */}
         <li><NavLink to="/home">Home</NavLink></li>

         {/* Profile */}
         <li>
            <NavLink to="/profile">Profile</NavLink>
            <ul>
               <li><a href="#">text</a></li>
               <li><a href="#">text</a></li>
               <li><a href="#">text</a></li>
            </ul>
         </li>

         {/* About */}
         <li>
            <NavLink to="/about">About</NavLink>
            <ul>
               <li><NavLink to="#">text</NavLink></li>
               <li><a href="#">text</a></li>
               <li>
                  <a href="#">text</a>
                  <ul>
                     <li><a href="#">text</a></li>
                     <li><a href="#">text</a></li>
                     <li><a href="#">text</a></li>
                  </ul>
               </li>
            </ul>
         </li>

         {/* Portfolio */}
         <li><a href="/portfolio">Portfolio</a></li>

         {/* Dialogs */}
         <li><NavLink to="/dialogs">Dialogs</NavLink></li>

         {/* Map */}
         <li><NavLink to="/users">Users</NavLink></li>
      </ul>
   </nav>
</div>
)
}

export default Nav;
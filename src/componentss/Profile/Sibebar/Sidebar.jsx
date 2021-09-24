import s from './Sidebar.module.css';
import ItemSide from './ItemSide/ItemSide';

function Sidebar(props){
   
   let SideElements = props.Sidebar.map( post =>
  <ItemSide src={post.srcForIcon} text={post.titleSide} /> )

   return(
      <div className={s.block__sidebar}>
            <div className={s.block__avatar}>
               <img className={s.avatar} src="https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg" alt="avatar" srcset="" />
            </div>
            <div className={s.menuItems}>
               {SideElements}
            </div>
         </div>
   )
}

export default Sidebar;
import s from './ItemSide.module.css';

function ItemSide(props){
return(
<div>
   <img className={s.ikonki} src={props.src} alt="" />
   <div className={s.item}>{props.text}</div>
</div>
)
}

export default ItemSide;
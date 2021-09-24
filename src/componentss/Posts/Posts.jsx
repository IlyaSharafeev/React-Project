import s from './Posts.module.css';

function Posts(props){
   return(
      <div className={s.wrapper}>
         <div className="div__img">
            <img src={props.avatarSrc} alt="avatar" />
            <span className={s.nickname}>{props.nick}</span>
         </div>
         <div className={s.textPost}>
            {props.message}
         </div>
         <div>
            <span className={s.btnLike}>{props.like}</span><img src="https://emojitool.ru/img/facebook/4.0/white-heart-1566.png" alt="like" className={s.imgLike} />
         </div>
         <hr />
      </div>
   )
}

export default Posts;
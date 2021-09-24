import s from './About.module.css';


function About(props){
return(
<div className={s.bodyAbout}>
   <p className={s.zagolovok}></p>
   <div className={s.blackFon}>Тут текст который надо убрать</div>
   </div>
)
}

export default About;
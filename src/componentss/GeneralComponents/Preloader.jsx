import preloader from '../../photo/loading.gif'
import s from './Preloader.module.css';


function Preloader(props){
   return(
      <div className={s.wrapperPreloader}>
         <img src={preloader} className={s.img} />
      </div>
   )
}

export default Preloader;
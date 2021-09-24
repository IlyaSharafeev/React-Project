import s from './Home.module.css';
import Post from '../Posts/Posts';
import FormContainer from './Form/FormContainer';
import { Redirect } from 'react-router-dom';


function Home(props){
let postElements = props.postsData.map( post =>
<Post message={post.message} avatarSrc={post.avatarSrc} nick={post.nick} like={post.like} /> )

   if(!props.isAuth) return <Redirect to={"/login"} />

return(
<div className={s.wrapper}>
   {postElements}
   <div>
      <FormContainer dispatch={props.dispatch} newPostText={props.postNewText} updateTextArea={props.updateTextArea}/>
   </div>
</div>
)
}

export default Home;
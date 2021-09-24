
import { connect } from 'react-redux';
import Home from './Home';


let mapStateToProps = (state) => {
   return{
      postsData: state.homePage.postsData,
      postNewText: state.homePage.newPostText,
      isAuth: state.auth.isAuth
   }
}

export default connect(mapStateToProps, {
   
}
)(Home);
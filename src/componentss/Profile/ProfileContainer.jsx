
import { connect } from 'react-redux';
import Profile from './Profile';



let mapStateToProps = (state) => {
   return{
      sidebar: state.ProfilePage.Sidebar,
      titleInput: state.ProfilePage.Main,
      isAuth: state.auth.isAuth
   }
}
let mapDispatchToProps = () => {
   return{
      
   }
}

const ProfileContainer = connect( mapStateToProps, mapDispatchToProps )(Profile);

export default ProfileContainer;
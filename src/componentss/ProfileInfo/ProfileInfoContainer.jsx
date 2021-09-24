import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import ProfileInfo from "./ProfileInfo";
import { setUserProfileInfo, getUserProfileThunk } from "../../redux/profileInfo-reducer";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileInfoContainer extends React.Component{

   componentDidMount(){
      let userId = this.props.match.params.userId;

      if(!userId){
         userId = 2;  
      }

      this.props.getUserProfile(userId);
   }
   render(){
      return <ProfileInfo {...this.props} profile={this.props.profile}/>
   }
}


let mapStateToProps = (state) => {
      return{
         profile: state.ProfileInfoPage.profile,
      }
   }


export default compose(
   connect(mapStateToProps, { setUserProfileInfo, getUserProfile: getUserProfileThunk }),
   withAuthRedirect
)(ProfileInfoContainer);

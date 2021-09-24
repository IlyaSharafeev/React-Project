
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { setAuthUserData } from '../../redux/auth-reducer'
import { getIdLoginEmail_Thunk } from "../../redux/login-reducer";


class LoginContainer extends React.Component {

   componentDidMount() {
      this.props.getIdLoginEmail();
   }

   render() {
      return <Login isAuth={this.props.isAuth} login={this.props.login} />
   }
}



let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login
   }
}

export default connect(mapStateToProps, { setAuthUserData, getIdLoginEmail: getIdLoginEmail_Thunk })(LoginContainer);
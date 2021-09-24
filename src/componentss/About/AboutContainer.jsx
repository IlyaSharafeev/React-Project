import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import About from "./About";
import React from "react";

class AboutContainer extends React.Component{
   componentDidMount(){

   }
   render(){
      return (<Aboutgit  {...this.props}/>)
   }
}

let mapStateToProps = (state) => {
   return {

   }
}

export default compose(
   connect(mapStateToProps,{}),
   withAuthRedirect
)(AboutContainer);
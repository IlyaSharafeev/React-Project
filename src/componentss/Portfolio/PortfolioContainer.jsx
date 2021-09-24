import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import Portfolio from './Portfolio';


class PortfolioContainer extends React.Component{
   componentDidMount(){

   }
   render(){
      return (<Portfolio {...this.props}/>)
   }
}

let mapStateToProps = (state) => {
   return{
      
   }

   }

export default compose(
   connect(mapStateToProps, {}),
   withAuthRedirect
)(PortfolioContainer);
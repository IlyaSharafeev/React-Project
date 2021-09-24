

import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs-reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

let mapStateToProps = (state) => {
   return{
      dialogsPage: state.dialogsPage
   }
}
let mapDispatchToProps = (dispatch) => {
   return{
      onSendMessageClick: () => {
         dispatch( sendMessageCreator() );
      },
      onNewMessageChange: (body) => {
         dispatch( updateNewMessageTextCreator(body) );
      }
   }
}
const DialogsContainer = (Dialogs)

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(DialogsContainer);
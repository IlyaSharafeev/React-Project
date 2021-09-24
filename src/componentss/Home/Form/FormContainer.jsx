
import { connect } from 'react-redux';
import { addPostActionCreator, onChangeActionCreator } from '../../../redux/home-reducer';
import Form from './Form';


   let mapStateToProps = () => {
      return{

      }
   }
   
   let mapDispatchToProps = (dispatch) => {
      return{
          onChange: (text) => {
             dispatch( onChangeActionCreator(text) );
          },
          addPost: (text) => {
              dispatch( addPostActionCreator(text) );
          }
      }
   }

   const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form)

export default FormContainer;
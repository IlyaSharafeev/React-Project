import axios from "axios";
import { setAuthUserData } from "./auth-reducer";


let initialState = {
       
}

function LoginReducer(state = initialState, action) {
       switch (action.type) {
            //   case UPDATE_NEW_POST_TEXT: {
            //          let stateCopy = {...state};
            //          stateCopy.newPostText = action.textArea;
            //          return stateCopy;
            //   }
              default:{
                     return state;
              }
       }
}

//! Thunk 

export const getIdLoginEmail_Thunk = () => {
   return (dispatch) => {
      axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { 
         withCredentials: true 
      })
      .then(response => {
         if( response.data.resultCode === 0 ){
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id,email,login));
         }
      })
   }
}

export default LoginReducer;
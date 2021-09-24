import axios from "axios";

const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
       profile: null
}

function ProfileInfoReducer(state = initialState, action) {
       switch (action.type) {
              case SET_USER_PROFILE: {
                     return {
                            ...state,
                            profile: action.profile
                     }
              }
              default: {
                     return state;
              }
       }
}


export function setUserProfileInfo(profile) {
       return {
              type: SET_USER_PROFILE,
              profile
       }
}

//! Thunk

export const getUserProfileThunk = (userId) => {
       return (dispatch) => {
              axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
                     dispatch(setUserProfileInfo(response.data));
              });
       }
}


export default ProfileInfoReducer;
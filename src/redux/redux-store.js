import authReducer from "./auth-reducer";
import DialogsReducer from "./dialogs-reducer";
import HomeReducer from "./home-reducer";
import ProfileReducer from "./profile-reducer";
import ProfileInfoReducer from "./profileInfo-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk"; 

const { createStore, combineReducers, applyMiddleware } = require("redux");


let reducers = combineReducers(
   {
      ProfilePage: ProfileReducer,
      dialogsPage: DialogsReducer,
      homePage: HomeReducer,
      usersPage: usersReducer,
      ProfileInfoPage: ProfileInfoReducer,
      auth: authReducer
   }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
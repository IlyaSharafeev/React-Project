
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Nav from './componentss/Nav/Nav.jsx';
import HomeContainer from './componentss/Home/HomeContainer.jsx';
import DialogsContainer from './componentss/Dialogs/DialogsContainer';
import ProfileContainer from './componentss/Profile/ProfileContainer';
import PortfolioContainer from './componentss/Portfolio/PortfolioContainer';
import UsersContainer from './componentss/Users/UsersContainer';
import ProfileInfoContainer from './componentss/ProfileInfo/ProfileInfoContainer';
import LoginContainer from './componentss/Login/LoginContainer';
import AboutContainer from './componentss/About/AboutContainer';



function App(props) {
  return (
    <BrowserRouter>
        <div className="app-wrapper">
          <Nav/>
         <div className='app-wrapper-content'>
          <Route path="/login" render ={ () => <LoginContainer /> }/>
          <Route path="/home" render ={ () => <HomeContainer /> }/>
          <Route path="/profile" render = { () => <ProfileContainer/> }/>
          <Route path="/about" render = { () => <AboutContainer/> }/>
          <Route path="/portfolio" render={ () => <PortfolioContainer/> }/>
          <Route path="/dialogs" render ={ () => <DialogsContainer /> }/>
          <Route path="/users" render ={ () => <UsersContainer/> }/>
          <Route path='/profileInfo/:userId?' render ={ () => <ProfileInfoContainer/> }/>
          </div>
         </div>
    </BrowserRouter>
       
  );
}

export default App;


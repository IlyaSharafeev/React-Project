
import App from './App';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/redux-store';
import { Provider } from 'react-redux';


function rerenderEntireTree(){
  ReactDOM.render(
  
    <Provider store={store}>
       <App/>
    </Provider>,
  
  document.getElementById('root')
);
}

rerenderEntireTree()
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './components/Login';
import AddGame from './components/AddGame';
import Register from './components/Register';
import Logout from './components/Logout';
import PrivateRoutes from './components/PrivateRoutes'



ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={App} />
        <PrivateRoutes exact path="/addgame" name="AddGame" component={AddGame} />




      </Switch>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

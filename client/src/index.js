import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Route, Router, Switch } from 'react-router-dom'
import Login from './components/Login';
import AddGame from './components/AddGame';
import Register from './components/Register';
import Logout from './components/Logout';
import PrivateRoutes from './components/PrivateRoutes'
import history from './History';



ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={App} />
        <PrivateRoutes exact path="/addgame" name="AddGame" component={AddGame} />
      </Switch>
      </Router>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import  BaseLayout  from './components/BaseLayout';
import Menu from './components/Menu';
import Login from './components/Login';
import AllGames from './components/AllGames';
import AddGame from './components/AddGame';
import Register from './components/Register'
import Navbar from './components/Navbar'


ReactDOM.render (
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
        <Route exact path = "/login" component = {Login} />
        <Route exact path = "/register"component = {Register} />
        <Route exact path = "/" component = {App} />
        <Route exact path = "/addGame" component = {AddGame} />
        {/* <Route exact path = "/navbar" component = {Navbar} /> */}
        </Switch>
      </BaseLayout>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

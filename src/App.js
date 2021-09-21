import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import ScreenItem from './components/screens/home/ScreenItem';
// import Todo from './components/Todo';
import Header from './components/screens/layouts/Header';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Cart from './components/screens/cart/Cart';
import Login from './components/screens/login/Login';
function App () {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Product Management">
            <Login />
          </Route>
          <Route path="/">
            <ScreenItem />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

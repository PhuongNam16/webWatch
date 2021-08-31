import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import ScreenItem from './components/screens/ScreenItem';
// import Todo from './components/Todo';
import Header from './components/screens/Header';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Cart from './components/screens/Cart';
function App () {
  return (
    <div className="App">
      <Router>
      
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/">
            <ScreenItem />
          </Route>
        </Switch>

      </Router>
      {/* <Navbar/>
     <Todo/> */}
    </div>
  );
}

export default App;

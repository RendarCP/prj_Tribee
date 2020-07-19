import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Home from '../src/page/Home.js'
import Login from '../src/page/Login.js'
import SignUp from '../src/page/SignUp.js'
 
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

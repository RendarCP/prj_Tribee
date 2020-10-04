import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Home from '../src/page/Home.js'
import Login from '../src/page/Login.js'
import SignUp from '../src/page/SignUp.js'
import Header from '../src/component/header'
 
function App() {
  return (
    <div>
      <Header />
      <div style={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

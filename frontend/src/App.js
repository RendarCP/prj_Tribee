import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Header from './component/Header'

// --- page
import Home from '../src/page/Home.js'
import Login from '../src/page/Login.js'
import SignUp from '../src/page/SignUp.js'
import Posts from '../src/page/Posts.js'
import Editpost from '../src/page/EditPost.js'

 
function App() {
  return (
    <div>
      <Header />
      <div style={{ width: "100%" }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/editpost" component={Editpost}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

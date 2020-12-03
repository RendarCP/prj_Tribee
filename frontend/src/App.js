import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Header from '../src/component/header.js'

// --- page
import Home from '../src/page/Home.js'
import Login from '../src/page/Login.js'
import SignUp from '../src/page/SignUp.js'
import Posts from '../src/page/Posts.js'
import Editpost from '../src/page/EditPost.js'
import Chats from './page/Chats.js'
import { HiOutlineChartSquareBar } from 'react-icons/hi';

 
function App() {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/editpost" component={Editpost}/>
            <Route path="/chat" component={Chats}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

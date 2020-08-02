import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        Home화면입니다.
        <div>
          <Link to="/login"><button>로그인 화면</button></Link>
          <Link to="/signup"><button>회원가입 화면</button></Link>
        </div>
      </div>
    );
  }
}

export default Home;
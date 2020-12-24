import React from 'react';
import { Link } from 'react-router-dom'

import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';

function Home() {
  return (
    <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      Home화면입니다.
      <div>
        <Link to="/login"><button>로그인 화면</button></Link>
        <Link to="/signup"><button>회원가입 화면</button></Link>
        <Link to="/posts"><button>포스트 화면</button></Link>
        <Link to="/editpost"><button>작성 화면</button></Link>
      </div>
    </div>
  );
}

export default Home;
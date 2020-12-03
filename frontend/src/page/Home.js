import React from 'react';
import { Link } from 'react-router-dom'

import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';

function NaverMapAPI() {
  return(
    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
      style={{
        width: '100%', // 네이버지도 가로 길이
        height: '85vh' // 네이버지도 세로 길이
      }}
      defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
      defaultZoom={13} // 지도 초기 확대 배율
    />
  );
}

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
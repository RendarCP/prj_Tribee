import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css'

class Login extends Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '500px', padding: '0 200px 0 200px'}}>
        Login화면입니다.
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width:'100%'}}>
          <div>Tribee 로그인</div>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
            <input placeholder="아이디를 입력하세요"/>
            <div style={{ height:'20px'}}/>
            <input placeholder="비밀번호를 입력하세요"/>
            <div style={{ height:'20px'}}/>
            <div style={{ margin:'0 auto', width: '100%' }}>
              <div style={{ textAlign: 'center', backgroundColor: '#d6a511', borderColor:'#d6a511', borderRadius: 4, padding: 10 }}>로그인</div>
            </div>
            <div style={{ height: 20 }}/>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <div style={{ color: 'gray'}}>아이디 찾기</div>
              <div style={{ borderRight:'1px solid gray', margin: '0 10px 0 10px' }}/>
              <div style={{ color: 'gray'}}>비밀번호 찾기</div>
              <div style={{ borderRight:'1px solid gray', margin: '0 10px 0 10px' }}/>
              <Link to="/signup">
                <div style={{  }}>회원가입</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Login;
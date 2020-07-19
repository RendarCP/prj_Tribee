import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        Login화면입니다.
        <div>
          <div>Tribee 로그인</div>
          <div style={{ display:'flex', flexDirection:'column', alignItems: 'center'}}>
            <input placeholder="아이디를 입력하세요"/>
            <input placeholder="비밀번호를 입력하세요"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
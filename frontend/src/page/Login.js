import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.css'

function Login({ history }) {
  const [inputs, setInputs] = useState({
    userId: '',
    password: ''
  })
  const onChange = (e) => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name] : value
    })
  }

  const onLogin = () => {
    axios.post("http://localhost:8080/api/login", {
      userId: inputs.userId,
      userPw: inputs.password,
    })
      .then( response => {
        console.log(response);
        history.push('/posts');
      })
      .catch( err => {
        console.log(err);
      })
  }

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      flexDirection: 'column', 
      height: 500,
      width: 650,
      padding: '0 100',
      margin: '0 auto'
      }}>
      <div style={{
        width: '100%', 
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
      }}>Tribee 로그인</div>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'column', 
        width: '100%',
        marginTop: 50
        }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <input 
            name="userId"
            placeholder="아이디를 입력하세요" 
            onChange={onChange}
            value={inputs.userId}
          />
          
          <div style={{ height:'20px'}} />
          
          <input
            name="password" 
            placeholder="비밀번호를 입력하세요" 
            onChange={onChange}
            value={inputs.password}
          />
          
          <div style={{ height:'20px'}}/>
          
          <div style={{ margin:'0 auto', width: '100%' }}>
            <div 
              style={{ 
                textAlign: 'center', 
                backgroundColor: '#d6a511', 
                borderColor:'#d6a511', 
                borderRadius: 4, 
                padding: 10 }}
              onClick={onLogin}
              >로그인</div>
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


export default Login;
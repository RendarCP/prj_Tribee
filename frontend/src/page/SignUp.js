import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
  state = {
    months:[
      '1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'
    ],
    monthValue: '1월',
    userId: '',
    password: '',
    passwordCheck: '',
    year: '',
    day: '',
    phone: '',
  }
  renderMonth() {
    return this.state.months.map((month)=>{
      return <option key={month} value={month}>{month}</option>
    })
  }
  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value 
    })
  }

  onSignUp = () => {
    axios.get("http://localhost:8080/addUser/test")
      .then( response => {
        console.log(response);
      })
      .catch( err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 500, flexDirection: 'column', padding:'0 235px 0 235px' }}>
        회원가입 화면입니다.
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <div>아이디</div>
          <input 
            placeholder='아이디를 입력해주세요' 
            value={this.state.userId} 
            onChange={this.handleChange}
            name='userId'/>
          <div style={{ margin: 10}}/>
          
          <div>비밀번호</div>
          <input 
            type='password' 
            value={this.state.password} 
            onChange={this.handleChange}
            name='password'
          />
          <div style={{ margin: 10}}/>
          
          <div>비밀번호 확인</div>
          <input 
            type='password'
            value={this.state.passwordCheck}
            onChange={this.handleChange}
            name='passwordCheck'
          />
          <div style={{ margin: 10}}/>
          
          <div>생년월일</div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <input placeholder='년도'/>
            <div style={{ width: 10 }}/>
            <select 
              value={this.state.monthValue} 
              onChange={this.handleChange}
              name='monthValue'
            >
              {this.renderMonth()}
            </select>
            <div style={{ width: 10 }}/>
            <input />
          </div>
          <div style={{ margin: 10}}/>
          
          <div>휴대폰 번호</div>
          <input 
            placeholder='번호를 입력해주세요'
            value={this.state.phone}
            name='phone'
          />
          <div style={{ height: 20 }}/>
          <div
            style={{ 
              textAlign: 'center', 
              backgroundColor: '#d6a511', 
              borderColor:'#d6a511', 
              borderRadius: 4, 
              padding: 10 }}
              onClick={this.onSignUp}
          >회원가입</div>
        </div>
      </div>
    );
  }
}

export default SignUp;
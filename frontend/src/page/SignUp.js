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
    userName:'',
    year: '',
    day: '',
    addr: '',
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
    axios.get(`http://localhost:8080/checkUserId/${this.state.userId}`).
    then( response => {
      console.log(response);
      axios.post("http://localhost:8080/api/user/addUser", {
        userId: this.state.userId,
        userPw: this.state.password,
        userNm: this.state.userName,
        // birth: this.state.year + this.state.monthValue + this.state.day,
        // addr: this.state.addr,
        // phone: this.state.phone
      })
        .then( response => {
          console.log(response);
          this.props.history.push('/login');
        })
        .catch( err => {
          console.log(err);
        })
    }).catch( err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 500, 
        width: 650,
        flexDirection: 'column', 
        margin: '0 auto'
        }}>
        <div
          style={{ padding: 35, fontWeight: 'bold', fontSize: 30}}>Tribee</div>
        
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
            placeholder='비밀번호를 입력해주세요' 
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
          {
            this.state.password === this.state.passwordCheck || this.state.passwordCheck ==! null
              ? null
              : <div style={{ color: 'red', fontSize: 13, marginTop: 5}}>비밀번호가 틀립니다. 확인해주세요!</div>

          }
          <div style={{ margin: 10}}/>

          <div>이름</div>
          <input 
            placeholder='이름을 입력해주세요' 
            type='userName' 
            value={this.state.userName} 
            onChange={this.handleChange}
            name='userName'
          />
          <div style={{ margin: 10}}/>
          
          <div>생년월일</div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <input
              placeholder='년도를 입력해주세요' 
              placeholder='년도'
              value={this.state.year}
              onChange={this.handleChange}
              name='year'
            />
            <div style={{ width: 10 }}/>
            <select 
              value={this.state.monthValue} 
              onChange={this.handleChange}
              name='monthValue'
            >
              {this.renderMonth()}
            </select>
            <div style={{ width: 10 }}/>
            <input placeholder="날짜"
              placeholder='날짜를 입력해주세요' 
              value={this.state.day}
              onChange={this.handleChange}
              name='day'
            />
          </div>
          <div style={{ margin: 10}}/>

          <div>주소</div>
          <input 
            placeholder='주소를 입력해주세요' 
            type='addr' 
            value={this.state.addr} 
            onChange={this.handleChange}
            name='addr'
          />
          <div style={{ margin: 10}}/>
          
          <div>휴대폰 번호</div>
          <input 
            placeholder='번호를 입력해주세요' 
            onChange={this.handleChange}
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
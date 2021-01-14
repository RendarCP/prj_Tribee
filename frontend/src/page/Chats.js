import React, { useState } from 'react';
import { FaRegPaperPlane,FaInfoCircle } from 'react-icons/fa';
import '../css/Chat.css';

import UserAvatar from '../component/UserAvatar.js';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Chats() {
  const matches = useMediaQuery('(min-width:900px)');
  return (
    <div style={{ padding: matches ? '0 300px 20px 300px' : 0 }}>
      <div style={{ display: 'flex', justifyContent: 'center', border: '2px solid gray', borderRadius: 10, height: '90vh' }}>
        <div style={{ width: '40%'}}>
          <div style={{ 
              display:'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 15,
              borderBottom: '1px solid gray'}}>
            <div />
            <div style={{ fontSize: 20, fontWeight: 'bold'}}>test</div>
            <FaRegPaperPlane style={{ width: 24, height: 24, padding: 4.7 }} />
          </div>
          <ChatList />
        </div>
        <div style={{ borderLeft: '2px solid gray',width: '70%' }}>
          <Chat matches={matches}/>
        </div>
      </div>
    </div>
  );
}

function ChatList() {
  return(
    <div>
      <div>
        <UserProfile />
      </div>
    </div>
  );
}

function Chat({matches}) {
  return(
    <>
      {/* Message 위 프로필 부분 */}
      <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: 15,
          borderBottom: '1px solid gray'}}>
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <UserAvatar small/>
          <div style={{ marginLeft: 10, fontWeight: 'bold'}}>
            test
          </div>
        </div>
        <div><FaInfoCircle style={{ width: 30, height: 30 }}/></div>
      </div>
      {/* message 부분 */}
      <div style={{ padding: 15 }}>
        <div style={{ 
          display: 'flex',
          justifyContent: 'flex-end',
          wordBreak: 'break-all',
          }}>
          <div style={{ backgroundColor: 'gray', borderRadius: 30, padding: 15, color: 'white' }}>본인이 작성한 글</div>
        </div>
        <div style={{ 
          display: 'flex',
          wordBreak: 'break-all',
          }}>
          <div style={{ border:'2px solid gray', borderRadius: 30, padding: 15 }}>상대방이 작성한 글</div>
        </div>
      </div>
      {/* 채팅창 부분 */}
      <div>
        <input 
          style={{ 
            position: 'absolute', 
            bottom: '-10px', 
            margin: '0 20px', 
            width: matches ? '66vh' : '50vh',
            padding: 10,
            border: '1px solid gray',
            borderRadius: 20
         }}
         placeholder='메시지를 입력해주세요'
        />
      </div>
    </>
  )
}

function UserProfile() {
  return(
    <div className="profile">
      <UserAvatar large/>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        marginLeft: 15 }}>
        <div>
          test
        </div>
        <div style={{ color: 'gray'}}>
          최근 접속일: 어제 
        </div>
      </div>
    </div>
  )
}

export default Chats;


import React, { useState } from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';

import UserAvatar from '../component/UserAvatar.js'

function Chats() {
  return (
    <div style={{ padding: '0 300px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', border: '1px solid gray', borderRadius: 5 }}>
        <div style={{ border: '1px solid red', width: '40%' }}>
          <ChatList />
        </div>
        <div style={{ border: '1px solid blue', width: '70%' }}>
          채팅부분 
        </div>
      </div>
    </div>
  );
}

function ChatList() {
  return(
    <div style={{ padding: 15}}>
      <div style={{ 
          display:'flex', 
          padding: 10, 
          justifyContent: 'space-between',
          alignItems: 'center'}}>
        <div />
        <div style={{ fontSize: 20, fontWeight: 'bold'}}>test</div>
        <FaRegPaperPlane style={{ width: 24, height: 24 }} />
      </div>
      <div>
        <UserProfile />
      </div>
    </div>
  );
}

function UserProfile() {
  return(
    <div style={{ display: 'flex'}}>
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


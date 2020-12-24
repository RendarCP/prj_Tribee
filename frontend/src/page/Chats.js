import React, { useState } from 'react';
import { FaRegPaperPlane,FaInfoCircle } from 'react-icons/fa';

import UserAvatar from '../component/UserAvatar.js';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Chats() {
  const matches = useMediaQuery('(min-width:900px)');
  return (
    <div style={{ padding: matches ? '0 300px' : 0 }}>
      <div style={{ display: 'flex', justifyContent: 'center', border: '2px solid gray', borderRadius: 10 }}>
        <div style={{ width: '40%'}}>
          <div style={{ 
              display:'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 15,
              borderBottom: '1px solid gray'}}>
            <div />
            <div style={{ fontSize: 20, fontWeight: 'bold'}}>test</div>
            <FaRegPaperPlane style={{ width: 24, height: 24, padding: 5 }} />
          </div>
          <ChatList />
        </div>
        <div style={{ borderLeft: '2px solid gray',width: '70%' }}>
          <Chat />
        </div>
      </div>
    </div>
  );
}

function ChatList() {
  return(
    <div>
      <div style={{ padding: 15 }}>
        <UserProfile />
      </div>
    </div>
  );
}

function Chat() {
  return(
    <div>
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
      <div style={{ padding: 15 }}>
        <div style={{ 
          display: 'flex',
          borderRadius: 5, 
          backgroundColor: 'gray', 
          justifyContent: 'flex-end'}}>
          <div>본인이 작성한 글</div>
        </div>
        <div>상대방이 작성한 글</div>
      </div>
    </div>
  )
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


import React from 'react';
//#component
import PostBar from './PostBar'
import PostContents from './PostContents'
import PostProfile from './PostProfile'

function PostView() {
  return (
      <div style={{ 
        border: '1px solid gray', 
        width: '70%', 
        borderRadius: 10,
        }}>
        
        {/* 프로필 부분 */}
        <PostProfile />
        
        <div>
          <img
            style={{ width: '100%', height: '100%' }} 
            src="https://firebasestorage.googleapis.com/v0/b/react-firebase-image-fd030.appspot.com/o/image%2F1.jpeg?alt=media&token=8872cb14-abd9-4340-8cdf-55f1cacc421f" />
        </div>
        
        {/*  좋아요 버튼 부분 */}
        <PostBar />
        
        {/* 본문 및 댓글 부분 */}
        <PostContents />
      </div>
  );
}

export default PostView;
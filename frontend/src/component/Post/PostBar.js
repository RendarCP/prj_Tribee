import React from 'react';
import { FaRegCommentAlt } from "react-icons/fa";

import like from '../../images/like.svg'
import unlike from '../../images/unlike.svg'

function PostBar() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', padding: 15 }}>
      <div>
        <img
          style={{ width: 24, height: 24 }} 
          src={like}
        />
      </div>

      <div style={{ marginRight: 15 }} />

      <div>
        <FaRegCommentAlt style={{ width: 24, height: 24 }} />
      </div>
    </div>
  );
}

export default PostBar;
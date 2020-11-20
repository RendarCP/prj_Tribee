import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import more from '../../images/more.svg'

function PostProfile() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent:'space-between',
      padding: 15
      }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          {/* <div style={{ 
            border: '1px solid black', 
            width: 32, 
            height: 32, 
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10
            }}>
            조
          </div> */}
          <Avatar>조</Avatar>
          <div style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 10 }}>test</div>
        </div>
        <div>
          <img style={{ width: 32, height: 32 }} src={more} />
        </div>
      </div>
  );
}

export default PostProfile;
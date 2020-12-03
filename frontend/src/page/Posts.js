import React, { useState } from 'react';

import PostView from '../component/Post/PostView'
import PostSide from '../component/Post/PostSide'

// --- libarary
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Posts() {
  const matches = useMediaQuery('(min-width:900px)');
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: matches ? "0 300px" : 0
      }}>
      <PostView />
      
      <Hidden only={['xs','sm']}>
        <PostSide />
      </Hidden>
    </div>
  );
}

export default Posts; 

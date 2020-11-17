import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// icons
import { HiHome } from 'react-icons/hi'
import { BiComment } from 'react-icons/bi'
import { GoLocation } from 'react-icons/go'

// image
import unlike from '../images/unlike.svg'

function Header() {
  const matches = useMediaQuery('(min-width:900px)');
  return (
    <div style={{ 
        height: 70, 
        marginBottom: 50,
        padding: matches ? "0 300px" : '0 100px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid gray',
        justifyContent: 'space-between'}}>
      <div style={{ fontSize: 24, fontWeight: 'bold' }}>
        Tribee
      </div>
      
      <div>
        <input />
      </div>
      
      <div style={{ display:'flex', flexDirection: 'row'}}>
        <div>
          <HiHome style={{ width: 32, height: 32 }}/>
        </div>
        <div style={{ marginRight: 20 }} />
        
        <div>
          <BiComment style={{ width: 32, height: 32 }} />
        </div>
        <div style={{ marginRight: 20 }} />

        <div>
          <GoLocation style={{ width: 32, height: 32 }} />
        </div>
        <div style={{ marginRight: 20 }} />
        
        <div>
          <img
            style={{ width: 32, height: 32 }}
            src={unlike}/>
        </div>
        <div style={{ marginRight: 20 }} />

        <div style={{ 
            border: '1px solid black', 
            width: 32, 
            height: 32, 
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
            }}>
            조
          </div>
      </div>
    </div>
  );
}

export default Header;
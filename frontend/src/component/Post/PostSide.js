import React, { useState } from 'react';
import { TiPlus } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { MAP_API } from '../../modules/Util.js'

import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';

function NaverMapAPI(props) {
  if(props.latitude !== '' && props.longitude !== ''){
    return(
      console.log('navermap if', props),
      <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'} 
        style={{
          width: '100%', 
          height: '100%' 
        }}
        defaultCenter={{ lat: props.latitude, lng: props.longitude }} 
        defaultZoom={15} 
      />
    );
  }
  else{
    return (
      <div>지도 로딩중...</div>
    )
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: 50,
    height: 50,
  },
}));

function PostSide() {
  const classes = useStyles();
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const getLocation = () => {
    if (navigator.geolocation) { 
      navigator.geolocation.getCurrentPosition((position) => {
        //alert(position.coords.latitude + ' ' + position.coords.longitude);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      }, (error) => {
        console.error(error);
      }, {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity
      });
    } else {
      alert('GPS를 지원하지 않습니다');
    }
  }
  return (
    getLocation(),
    <div style={{ 
      width: '30%',
      marginLeft: 30,
      }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Avatar className={classes.large}>조</Avatar>
        <div style={{ flexDirection: 'row', marginLeft: 20}}>
          <div style={{ fontSize: 14, fontWeight: 'bold'}}>test</div>
          <div>cho seong wook</div>
        </div>
        
        <Link to="/editpost">
          <div style={{ 
            position: 'fixed', 
            right: 100, 
            bottom: 100,
          }}>
            <div style={{ 
              borderRadius: 10, 
              backgroundColor:'#d6a511', 
              padding: 20, 
            }}>
              <TiPlus style={{ color: 'black'}}/>
            </div> 
          </div>
        </Link>
      </div>
      
      <div style={{ marginTop: 20 }}>
        <div style={{ width: "100%", height: 400 }}>
          <RenderAfterNavermapsLoaded
            ncpClientId={MAP_API} // 자신의 네이버 계정에서 발급받은 Client ID
            error={<p>Maps Load Error</p>}
            loading={<p>Maps Loading...</p>}
          >
            <NaverMapAPI latitude={latitude} longitude={longitude}/>
          </RenderAfterNavermapsLoaded>
        </div>
      </div>
    </div>
  );
}

export default PostSide;
import React from 'react';
import { TiPlus } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

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
  return (
    <div style={{ 
      width: '30%',
      // position: 'relative',
      // bottom: 160,
      // left: 30,
      marginLeft: 30,
      marginBottom: 340
      }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        {/* <div style={{ 
          border: '1px solid black', 
          width: 50, 
          height: 50, 
          borderRadius: 25,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 10
          }}>
          조
        </div> */}
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
        <div style={{ width: "100%", height: 200, border: '1px solid blue'}}>
          지도부분
        </div>
      </div>
    </div>
  );
}

export default PostSide;
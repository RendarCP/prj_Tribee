import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

function UserAvatar(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: 30,
      height: 30,
    },
    large: {
      width: 50,
      height: 50,
    },
  }));
  const classes = useStyles();
  return(
    <div>
      <Avatar className={props.large ? classes.large : classes.small}>조</Avatar>
    </div>
  );
}

export default UserAvatar
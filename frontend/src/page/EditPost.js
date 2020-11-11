import React, { useState } from 'react';
import ImageUploader from "react-images-upload";
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function EditPost() {
  const matches = useMediaQuery('(min-width:900px)');
  const [pictures, setPictures] = useState([]);

  const onDrop = picture => {
    setPictures([ ...pictures, picture ])
  };

  return (
    <div style={{ 
      justifyContent: 'center', 
      alignItems: 'center', 
      flexDirection: 'row',
      border: '1px solid red',
      padding: matches ? "0 300px" : 0
      }}>
      <div>
        <ImageUploader 
          label="이미지선택해주세요 (5mb이하 파일)"
          buttonText="이미지 선택"
          onChange={onDrop}
          buttonStyles={{ backgroundColor: '#d6a511', color: 'black', fontSize: 15 }}
        />
      </div>
      <div>
        <TextField
          rows={5}
          fullWidth 
          multiline
          label="내용"
          variant='outlined'
        />
      </div>
      <div>
        <TextField
          fullWidth 
          label="태그"
          variant="outlined"
        />
      </div>
    </div>
  );
}


export default EditPost;
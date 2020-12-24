import React, { useState } from 'react';
import ImageUploader from "react-images-upload";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#d6a511"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#d6a511"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#d6a511"
    },
    "& .MuiInputLabel-outlined": {
      color: "black"
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "#d6a511"
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "black"
    }
  }
});
function EditPost({ history }) {
  const matches = useMediaQuery('(min-width:900px)');
  const [pictures, setPictures] = useState([]);
  const [post, setPosts] = useState({});
  const [inputs, setInputs] = useState({
    contents: '',
    tag: ''
  })

  const onChange = (e) => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name] : value
    })
  }

  const onDrop = picture => {
    setPictures([ ...pictures, picture ])
  };

  const onPostUpload = () => { 
    setPosts({
      userId: 'test03',
      contents: inputs.contents,
      tag: inputs.tag,
      images: pictures,
      like: {},
      comments: {},
      positionId: {}
    })
    axios.post("http://localhost:8080/api/post/insert", {
      userId: 'test03',
      contents: inputs.contents,
      tag: inputs.tag,
      images: pictures,
      like: {},
      comments: {},
      positionId: {}
    })
      .then( response => {
        console.log(response);
        history.push('/posts');
      })
      .catch( err => {
        console.log(err);
      })
  }

  const classes = useStyles();
  return (
    console.log('test', post),
    <form encType="multipart/form-data">
      <div style={{ 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row',
        padding: matches ? "0 300px" : "0 100px"
        }}>
        <div>
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center',
            }}>
              <div style={{ width: '100%', borderBottom: '2px solid #d6a511', marginBottom: 13}}/>
              <div style={{ 
                width: '100%', 
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20
              }}>Tribee 게시글 작성</div>
              <div style={{ width: '100%', borderBottom: '2px solid #d6a511', marginBottom: 13}}/>
            </div>
          <ImageUploader 
            fileContainerStyle={{
              border: '1px solid #d6a511'
            }}
            label="이미지선택해주세요 (5mb이하 파일)"
            buttonText="이미지 선택"
            fileTypeError="이미지 형식만 업로드 가능합니다!"
            fileSizeError="이미지 사이즈가 너무 큽니다!"
            onChange={onDrop}
            withPreview={true}
            buttonStyles={{ backgroundColor: '#d6a511', color: 'black', fontSize: 20 }}
          />
        </div>
        <div style={{ marginTop: 50 }}>
          <TextField
            className={classes.root}
            rows={5}
            fullWidth 
            multiline
            name="contents"
            onChange={onChange}
            label="내용"
            variant='outlined'
          />
        </div>
        <div style={{ marginTop: 50}}>
          <TextField
            className={classes.root}
            fullWidth 
            name="tag"
            onChange={onChange}
            label="태그"
            variant="outlined"
          />
        </div>
        <div>
          <div 
            style={{ 
              marginTop:30,
              textAlign: 'center', 
              backgroundColor: '#d6a511', 
              borderColor:'#d6a511', 
              borderRadius: 4, 
              padding: 10 }}
              onClick={onPostUpload}
            >저장</div>
        </div>
      </div>
    </form>
  );
}


export default EditPost;
import React, { Component } from 'react';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom'

// --- icon 
import { TiPlus } from 'react-icons/ti'
import { FaRegCommentAlt } from "react-icons/fa";

// image
import more from '../images/more.svg'
import like from '../images/like.svg'
import unlike from '../images/unlike.svg'

class Posts extends Component {
  render() {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '0 300px'
        }}>
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
        
        <Hidden only="sm">
          <div style={{ 
            width: '30%',
            position: 'relative',
            bottom: 160,
            left: 30,
            }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <div style={{ 
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
              </div>
              <div style={{ flexDirection: 'row'}}>
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
                    <TiPlus />
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
        </Hidden>
      </div>
    );
  }
}

export default Posts; 

class PostBar extends Component {
  render() {
    return(
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
    )
  }
}

class PostContents extends Component {
  render() {
    return(
      <div style={{ padding: 15 }}>
        <div>
          <div style={{ fontSize: 14 }}>좋아요 60000만개</div>
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 'bold'}}>test</div>
          <div style={{ fontSize: 14 }}>테스트</div>
        </div>

        <div>
          <div>댓글 부분</div>
        </div>
      </div>
    )
  }
}

class PostProfile extends Component {
  render(){
    return(
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent:'space-between',
        padding: 15
        }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div style={{ 
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
            </div>
            <div style={{ fontSize: 14, fontWeight: 'bold'}}>test</div>
          </div>
          <div>
            <img style={{ width: 32, height: 32 }} src={more} />
          </div>
        </div>
    )
  }
}
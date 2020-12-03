const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'user/LOGIN_FAILURE';
const LOGOUT_SUCCESS = 'user/LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'user/LOGOUT_FAILURE';

const initialstate = {
  loginLoading: false,
  loginDone: false,
  loginError: false,
  userInfo: {},
  errMsg: '',
  logoutLoading: false,
  logoutError: false,
  logoutDone: false,
};

const reducer = (state = initialstate, action) => {
  switch(action.type){
    case LOGIN_SUCCESS :
      return{
        loginLoading: false,
        loginDone: true,
        userInfo: action.data,
      }
    case LOGOUT_FAILURE: 
      return {
        loginLoading: false,
        LoginError: true,
        errMsg: action.error
      }
    case LOGOUT_SUCCESS: 
      return {
        logoutLoading: false,
        logoutDone: true,
      }
    case LOGOUT_FAILURE:
      return {
        logoutLoading: false,
        errMsg: action.error,
      }
  }
}


export default reducer;

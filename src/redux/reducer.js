const LOGIN_PENDING = "LOGIN_PENDING";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

//action creators
function setLoginPending(isLoginPending) {
      console.log("isLoginPending",isLoginPending);
  return {
    type: LOGIN_PENDING,
    isLoginPending,
  };
}

function setLoginSuccess(isLoginSuccess) {
      console.log(isLoginSuccess,"success");
  return {
    type: LOGIN_SUCCESS,
    isLoginSuccess,
  };
}

function setLoginError(isLoginError) {
      console.log("error",isLoginError);
  return {
    type: LOGIN_ERROR,
    isLoginError,
  };
}

export function login(email, password) {
      console.log(email,password,"------------");
      
  return (dispatch) => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    loginApi(email, password, (error) => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  };
}

function loginApi(email, password, callback) {
  setTimeout(() => {
    if (email === "hruday@gmail.com" && password === "hruday123") {
      return callback(null);
    } else {
      return callback(new Error("Invalid credintials"));
    }
  }, [1000]);
}

export default function loginReducer(
  state = {
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginError: null,
  },
  action
) {
      console.log("action",action);
      
  switch (action.type) {
    case LOGIN_PENDING:
     return {
           ...state,
           isLoginPending : action.isLoginPending
     }
      break;
    case LOGIN_SUCCESS:
       return {
             ...state,
             isLoginSuccess : action.isLoginSuccess
       }
       break;
   case LOGIN_ERROR:
         return {
               ...state,
               isLoginError : action.isLoginError
         }
    default: 
       return state;
  }
}

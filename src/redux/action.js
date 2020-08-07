//action creators

export const LOGIN_PENDING = "LOGIN_PENDING";
 function setLoginPending(isLoginPending) {
      // console.log("isLoginPending 1",isLoginPending);
  return {
    type: LOGIN_PENDING,
    isLoginPending,
  };
}
 
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
 function setLoginSuccess(isLoginSuccess) {
      // console.log("isLoginSuccess 2",isLoginSuccess)
  return {
    type: LOGIN_SUCCESS,
    isLoginSuccess,
  };
}

export const LOGIN_ERROR = "LOGIN_ERROR";
 function setLoginError(isLoginError) {
      // console.log("error 3",isLoginError);
  return {
    type: LOGIN_ERROR,
    isLoginError,
  };
}

export function login(email, password) {
      // console.log(email,password,"------------");
      
  return (dispatch) => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    loginApi(email, password, (error) => {
      console.log(error,"error")
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
  // console.log(email,"---",password,"---")
  setTimeout(() => {
    if (email === "hruday@gmail.com" && password === "hruday123") {
      return callback(null);
    } else {
      return callback(new Error("Invalid credintials"));
    }
  }, [1000]);
}

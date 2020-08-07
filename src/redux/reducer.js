import * as actions from  './action.js';
 function loginReducer(
      state = {
        isLoginPending: false,
        isLoginSuccess: false,
        isLoginError: null,
      },
      action
    ) {
          console.log("action",action);
          
      switch (action.type) {
        case actions.LOGIN_PENDING:
         return {
               ...state,
               isLoginPending : action.isLoginPending
         }
      //     break;
        case actions.LOGIN_SUCCESS:
           return {
                 ...state,
                 isLoginSuccess : action.isLoginSuccess
           }
      //      break;
       case actions.LOGIN_ERROR:
             return {
                   ...state,
                   isLoginError : action.isLoginError
             }
            //  break;
        default: 
           return state;
      }
    }

export default loginReducer

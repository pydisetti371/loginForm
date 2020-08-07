import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import  {login} from './redux/reducer';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      validation: false,
      password: "",
      email: "",
    };
    this.email = this.email.bind(this);
    this.password = this.password.bind(this)
  }

  email = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  password = (e) => {
    // console.log(e.target.value)
    // const password = e.target.value
    // let validation = /^[0-9a-zA-Z]+$/
    // if(password && password.value && password.value.match(validation)) {
    //   this.setState({
    //     validation : false
    //   })
    // } else {
    //   this.setState({
    //     validation : true
    //   })
    // }
    this.setState({
      password: e.target.value,
    });
  };

  submit = () => {
    // console.log("hello");
    const {email,password} = this.state
    // console.log(password, email);
    this.props.dispatch(login(email,password))

  };
  render() {
    // console.log(this.state.password, "password");
    const { isLoginPending , isLoginSuccess ,loginError } = this.props;
    console.log(isLoginPending,"---",isLoginSuccess,"---",loginError)
    const { password, email } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <span>
          <p>
            username : <input id="email" value={email} onChange={e =>this.setState({email : e.target.value})} />
          </p>
        </span>
        <span>
          <p>
            password :{" "}
            <input type="password" value={password} onChange={e => this.setState({password : e.target.value})} />
          </p>
        </span>
        <button onClick={this.submit}>Login</button>
        {isLoginPending ? <h1>Please wait..</h1> : isLoginSuccess ? <p>Success</p> : loginError ? <p>Fail</p>: null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     login: (email,password) => dispatch(login(email,password))
//   }
// }

export default connect(mapStateToProps)(App);

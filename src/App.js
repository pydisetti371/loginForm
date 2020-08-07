import React from "react";
import { connect } from "react-redux";
import { login } from "./redux/action";
import Dashboards from "./dashboards.js";
import "antd/dist/antd.css";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      validation: false,
      password: "",
      email: "",
    };
  }

  submit = () => {
    const { email, password } = this.state;
    if (!password && !email) {
      this.setState({
        validation : true
      })
    } else {
      this.setState({
        validation : false
      })
      this.props.dispatch(login(email, password))
    }
    
  };
  render() {
    const { isLoginPending, isLoginSuccess, loginError } = this.props;
    const { password, email } = this.state;
    return (
      <div>
        {!isLoginSuccess ? (
          <div>
            <h1>Login</h1>
            <span>
              <p>
                username :{" "}
                <input
                  id="email"
                  value={email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </p>
            </span>
            <span>
              <p>
                password :{" "}
                <input
                  type="password"
                  value={password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </p>
            </span>
            <button onClick={this.submit}>Login</button>
            {isLoginPending ? (
              <p>Please wait..</p>
            ) : isLoginSuccess ? (
              <p>Success</p>
            ) : loginError ? (
              <p>Fail</p>
            ) : null}
          </div>
        ) : null}

        {isLoginSuccess ? <Dashboards /> : null}
       
 
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.isLoginError,
  };
};

export default connect(mapStateToProps)(App);

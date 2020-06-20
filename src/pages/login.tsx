import React, { Component } from 'react';
import { login } from '../redux/actions';
import store from '../redux/store';

class Login extends Component<any, any> {
  state = {
    username: "",
    password: "",
  }

  changeData = (state, event) => {
    this.setState({ [state]: event.target.value });
  }

  login = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    store.dispatch(login(username, password));
  }

  render() {
    const { username, password } = this.state;
       
    return (
      <div className="main-container">
        <div className="login-form-container">
          <form className="login-form" onSubmit={(event) => this.login(event)}>
            <input
              className="login-input"
              onChange={(event) => this.changeData('username', event)}
              value={username}
              placeholder="Username"
              type="text"
            />
            <input
              className="login-input"
              onChange={(event) => this.changeData('password', event)}
              value={password}
              placeholder="Password"
              type="text"
            />
            <div
              className="standard-button"
              onClick={(event) => this.login(event)}
            >
              Login
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
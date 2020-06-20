import React, { Component } from 'react';
import { logout } from '../redux/actions';
import store from '../redux/store';

class Profile extends Component<any, any> {

  logout = () => {
    store.dispatch(logout());
  }

  render() {
    
    return (
      <div className="main-container">
        <div
          className="standard-button"
          onClick={this.logout}
        >
          Logout
        </div>
      </div>
    )
  }
}

export default Profile;
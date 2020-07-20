import React, { Component } from 'react';
import { logout } from '../redux/actions';
import store from '../redux/store';

class Profile extends Component<any, any> {

  logout = () => {
    store.dispatch(logout());
  }

  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 col-sm-3 col-xl-2">1</div>
          <div className="col-6 col-sm-3 col-xl-2">2</div>
          <div className="col-6 col-sm-3 col-xl-2">3</div>
          <div className="col-6 col-sm-3 col-xl-2">4</div>
          <div className="col-6 col-sm-3 col-xl-2">5</div>
          <div className="col-6 col-sm-3 col-xl-2">6</div>
        </div>
      </div>
    )
  }
}

export default Profile;
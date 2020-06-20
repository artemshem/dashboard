import React, { Component } from 'react';
import { logout } from '../../redux/actions';
import store from '../../redux/store';

class Header extends Component<any, any> {

  logout = () => {
    store.dispatch(logout());
  }

  render() {

    return (
      <header className="header">
        <div className="header__title">
          <h1>Dashboard</h1>
        </div>
        <div className="header-logout">
          <div
            className="header-logout__button"
            onClick={this.logout}
          >
            Logout
          </div>
        </div>
      </header>
    )
  }
}



export default Header;
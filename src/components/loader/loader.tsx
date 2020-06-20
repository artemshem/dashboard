import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router'
import store from '../../redux/store';

class Loader extends Component<any, any> {

  componentDidUpdate = () => {
    const { Component: { name } } = this.props;
    const { logged } = store.getState();
    if (logged && name === 'Login') {
      Router.push('/profile')
    } else if (!logged && name === 'Profile') {
      Router.push('/login');
    }
  }

  render() {
    const { Component, Component: { name } } = this.props;
    return (
      <main className={`base-cloud base-cloud__${name.toLowerCase()}`}>
        <Component />
      </main>
    )
  }
}

export default connect(store => store)(Loader);
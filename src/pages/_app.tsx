import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import Loader from '../components/loader/loader';
import Login from './login';
import '../styles/index.scss';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { autologin } from '../redux/actions';
import { capitalize } from '../utils/commonUtils';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component<any, any> {
  state = {
    logged: false,
  }

  componentDidMount = () => {
    if (typeof window !== 'undefined') {
      const myStorage: any = window.localStorage;
      const logged: boolean = JSON.parse(myStorage.getItem('logged'));
      this.setState({ logged });
      if (logged) {
        store.dispatch(autologin());
      }
    }
  }

  render() {
    const { Component, router } = this.props;
    const { logged } = this.state;
    const path: string = router.pathname.slice(1, router.pathname.length) || 'Main';

    if (!logged) {
      return <Login />
    }

    return (
      <div className="app">
        <Head>
          <meta httpEquiv="expires" content="0" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/img/admin.ico" type="image/png" />
          <title> {capitalize(path)} - Dashboard </title>
        </Head>
        <Provider store={store}>
          <div className="main">
            <Sidebar />
            <div className="content-container">
              <Header />
              <Loader Component={Component} />
            </div>
          </div>
        </Provider>
      </div>
    )
  }
}


export default App;
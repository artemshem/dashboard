import React, { Component } from 'react';
import Link from 'next/link';
import { login } from '../../redux/actions';
import store from '../../redux/store';

class Sidebar extends Component<any, any> {

  render() {

    return (
      <aside className="sidebar-container">
        <div className="sidebar-header"> </div>
        <nav className="sidebar-menu">
          <ul>
            <li>
              <Link href="/" passHref>
                <a className="sidebar-menu__item">
                  <div className="sidebar-menu__icon sidebar-menu__icon_main"></div>
                  <span>Main</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="news" passHref>
                <a className="sidebar-menu__item">
                  <div className="sidebar-menu__icon sidebar-menu__icon_news"></div>
                  <span>News</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="profile" passHref>
              <a className="sidebar-menu__item">
                  <div className="sidebar-menu__icon sidebar-menu__icon_profile"></div>
                  <span>Profile</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="users" passHref>
              <a className="sidebar-menu__item">
                  <div className="sidebar-menu__icon sidebar-menu__icon_users"></div>
                  <span>Users</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="monitoring" passHref>
              <a className="sidebar-menu__item">
                  <div className="sidebar-menu__icon sidebar-menu__icon_monitoring"></div>
                  <span>Monitoring</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="transactions" passHref>
              <a className="sidebar-menu__item">
                  <div className="sidebar-menu__icon sidebar-menu__icon_transactions"></div>
                  <span>Transactions</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="products" passHref>
              <a className="sidebar-menu__item">
                  <div className="sidebar-menu__icon sidebar-menu__icon_products"></div>
                  <span>Products</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="login" passHref>
              <a className="sidebar-menu__item">
                  <div className="sidebar-menu__icon sidebar-menu__icon_login"></div>
                  <span>Login</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
}

export default Sidebar;
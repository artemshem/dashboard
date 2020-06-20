import React, { Component } from 'react';
import API from '../../../api/api';

class UserScrollList extends Component<any, any> {
  state = {
    users: [] as Array<any>,
  }

  api = new API();

  componentDidMount = () => {
    this.api.getUsers(12)
      .then((data) => {
        this.setState({ users: data.results });
      })
  }

  render() {
    const { users } = this.state;

    return (
      <div className="info-item info-item_tall">
        <div className="user-scroll-header">
          <span className="user-scroll-header__title">Users</span>
        </div>
        <div className="user-scroll-body">
          <div className="user-scroll-list">
            {users.map((item) => {
              return (
                <div className="user-scroll-item">
                  <img className="user-scroll__img" src={item.picture.thumbnail} alt="user" />
                  <span className="user-scroll__name">{item.name.first} {item.name.last}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default UserScrollList;
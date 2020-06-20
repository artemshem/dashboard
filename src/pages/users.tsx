import React, { Component } from 'react';
import API from '../api/api';
import UserCard from '../components/user/user-card';
import UserSlide from '../components/user/user-slide';

class Users extends Component<any, any> {
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
    console.log(users);

    return (
      <div className="users-page">
        <div className="users-page__title">Users</div>
        <div className="users-list">
          {users.map((item, index) => {
            return (
              <UserCard {...item} key={index} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Users;
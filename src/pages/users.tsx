import React, { Component } from 'react';
import API from '../api/api';
import UserCard from '../components/user/user-card';
import SlideContainer from '../components/slide/slide-container';
import UserSlideMakeup from '../components/user/user-slide-makeup';
import UserFilters from '../components/user/users-filters';

class Users extends Component<any, any> {
  state = {
    slideActive: false,
    activeUser: null,
    users: [] as Array<any>,
    usersFiltred: [] as Array<any>,
    filter: null,
  };

  api = new API();

  componentDidMount = () => {
    this.api.getUsers(12)
      .then((data) => {
        let i = 0;
        const result = data.results.map((item) => {
          return ({
            ...item,
            uniqueID: i++,
          })
        })
        this.setState({
          users: result,
          usersFiltred: result,
        });
      });
  };

  outsideClickHandler = () => {
    if (this.state.slideActive) {
      this.setState({ slideActive: false });
    }
  };

  clickOnCard = (uniqueID) => {
    this.setState({
      activeUser: uniqueID,
      slideActive: true,
    });
  };

  changeFilter = (event, param) => {
    const { users } = this.state;
    const { value } = event.target;
    if (value === 'No filter') {
      this.setState({ usersFiltred: users });
      return;
    }
    let usersFiltred;
    if (param === 'gender') {
      usersFiltred = users.filter((item) => item.gender === value.toLowerCase())
    }
    this.setState({ usersFiltred });
  };

  render() {
    const { users, usersFiltred, activeUser, slideActive } = this.state;

    return (
      <div className="users-page">
        <SlideContainer
          slideActive={slideActive}
          outsideClickHandler={this.outsideClickHandler}
        >
          <UserSlideMakeup
            activeUser={users.find((item) => item.uniqueID === activeUser)}
          />
        </SlideContainer>
        <div className="users-page__title">Users</div>
        <UserFilters
          changeFilter={this.changeFilter}
        />
        <div className="users-list">
          {usersFiltred.map((item) => {
            return (
              <UserCard
                {...item}
                key={item.uniqueID}
                clickOnCard={this.clickOnCard}
              />
            )
          })}
        </div>
      </div>
    );
  };
};

export default Users;
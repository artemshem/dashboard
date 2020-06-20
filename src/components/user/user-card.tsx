import React, { Component } from 'react';

interface IComponentProps {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  login: {
    username: string;
  };
  phone: string;
  registered: {
    date: string;
  };
  location: {
    city: string;
  };
}

class UserCard extends Component<IComponentProps> {

  render() {
    const { name, picture, login, phone, registered, location } = this.props;

    return (
      <div className="user-card">
        <div className="user-card-inner">
          <div className="user-card-header">
            <div className="user-card__name">
              {name.first} {name.last}
            </div>
          </div>
          <div className="user-card__img">
            <img src={picture.large} alt="user" />
          </div>
          <div className="user-card-info">
            <p className="user-card-info__item">Username: {login.username}</p>
            <p className="user-card-info__item">Phone: {phone}</p>
            <p className="user-card-info__item">Registered: {registered.date}</p>
            <p className="user-card-info__item">City: {location.city}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default UserCard;
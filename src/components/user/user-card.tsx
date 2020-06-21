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
  uniqueID: number;
  gender: string,
  dob: {
    age: number;
  }
  clickOnCard: (uniqueID) => number;
}

class UserCard extends Component<IComponentProps> {

  render() {
    const { name, picture, login, phone, registered, location, uniqueID, gender, dob, clickOnCard } = this.props;

    return (
      <div className="user-card-outer">
        <div className="user-card"
          onClick={() => clickOnCard(uniqueID)}
        >
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
            <p className="user-card-info__item">Gender: {gender}</p>
            <p className="user-card-info__item">Age: {dob.age}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default UserCard;
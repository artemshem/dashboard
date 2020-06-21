import React, { Component } from 'react';
import { DateTime } from 'luxon';

class UserSlideMakeup extends Component<any, any> {

  render() {
    const { activeUser } = this.props;
    if (!activeUser) return null;
    const { name, picture, login, phone, email, registered, 
      location, uniqueID, clickOnCard, dob, gender } = activeUser;
    const registeredFixed = DateTime.fromISO(registered.date);

    return (
      <div className="slide-info">
        <div className="slide-info-img">
          <img src={picture.large} alt="user" />
        </div>
        <div className="slide-info-block">
          <div className="slide-info-head">Personal info</div>
          <div className="slide-info-line">
            <span className="slide-info__title">Name:</span>
            <span className="slide-info__data">{name.first} {name.last}</span>
          </div>
          <div className="slide-info-line">
            <span className="slide-info__title">Username:</span>
            <span className="slide-info__data">{login.username}</span>
          </div>
          <div className="slide-info-line">
            <span className="slide-info__title">Password:</span>
            <span className="slide-info__data">{login.password}</span>
          </div>
          <div className="slide-info-line">
            <span className="slide-info__title">Registered:</span>
            <span className="slide-info__data">{registeredFixed.toFormat('yyyy-MM-dd')}</span>
          </div>
          <div className="slide-info-line">
            <span className="slide-info__title">Gender:</span>
            <span className="slide-info__data">{gender}</span>
          </div>
          <div className="slide-info-line">
            <span className="slide-info__title">Age:</span>
            <span className="slide-info__data">{dob.age}</span>
          </div>
        </div>
        <div className="slide-info-block">
          <div className="slide-info-head">Contacts</div>
          <div className="slide-info-line">
            <span className="slide-info__title">Phone:</span>
            <span className="slide-info__data">{phone}</span>
          </div>
          <div className="slide-info-line">
            <span className="slide-info__title">Email:</span>
            <span className="slide-info__data">{email}</span>
          </div>
        </div>
        <div className="slide-info-block">
          <div className="slide-info-head">Location</div>
          <div className="slide-info-line">
            <span className="slide-info__title">Country:</span>
            <span className="slide-info__data">{location.country}</span>
          </div>
          <div className="slide-info-line">
            <span className="slide-info__title">State:</span>
            <span className="slide-info__data">{location.state}</span>
          </div>
          <div className="slide-info-line">
            <span className="slide-info__title">City:</span>
            <span className="slide-info__data">{location.city}</span>
          </div>
          <div className="slide-info-line">
            <span className="slide-info__title">Street:</span>
            <span className="slide-info__data">{location.street.name} {location.street.number}</span>
          </div>
        </div>
      </div>
    );
  };
};

export default UserSlideMakeup;
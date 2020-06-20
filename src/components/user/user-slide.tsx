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

class UserSlide extends Component<IComponentProps> {

  render() {
    const { name, picture, login, phone, registered, location } = this.props;

    return (
      <div className="side-slide">
        <img
          src="/img/close.svg"
          className="slide-close"
          // onClick={this.props.closeClick}
          alt="close"
        />
        
      </div>
    )
  }
}

export default UserSlide;
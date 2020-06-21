import React, { Component } from 'react';

class Slide extends Component<any, any> {

  render() {
    const { closeClick, children } = this.props;

    return (
      <div className="side-slide">
        <img
          src="/img/close.svg"
          className="slide-close"
          onClick={closeClick}
          alt="close"
        />
        {children}
      </div>
    );
  };
};

export default Slide;
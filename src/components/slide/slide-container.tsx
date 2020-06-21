import React, { Component } from 'react';
import Slide from './slide';
import OutsideClickHandler from 'react-outside-click-handler';

class SlideContainer extends Component<any, any> {

  render() {
    const { slideActive, outsideClickHandler, children } = this.props;

    return (
      <div className={`slide-container ${slideActive ? 'active' : ''}`} >
        <OutsideClickHandler onOutsideClick={outsideClickHandler} >
          <Slide closeClick={outsideClickHandler} >
            {children}
          </Slide>
        </ OutsideClickHandler>
      </div>
    );
  };
};

export default SlideContainer;
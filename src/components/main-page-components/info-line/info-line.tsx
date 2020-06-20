import React, { Component } from 'react';
import InfoLineItem from './info-line-item';

interface IComponentProps {
  data: Array<any>;
}

class InfoLine extends Component<IComponentProps> {
  
  render() {
    const { data } = this.props;

    return (
      <div className="info-line">
        {data.map((item, index) => {
          return (
            <InfoLineItem {...item} key={index} />
          )
        })}
      </div>
    );
  }
};

export default InfoLine;
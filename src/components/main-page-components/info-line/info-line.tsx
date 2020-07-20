import React, { Component } from 'react';
import InfoLineItem from './info-line-item';

interface IComponentProps {
  data: Array<any>;
  grid: string;
}

class InfoLine extends Component<IComponentProps> {
  
  render() {
    const { data, grid } = this.props;

    return (
      <div className="row">
        {data.map((item, index) => {
          return (
            <InfoLineItem {...item} grid={grid} key={index} />
          )
        })}
      </div>
    );
  }
};

export default InfoLine;
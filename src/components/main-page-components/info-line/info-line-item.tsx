import React, { Component } from 'react';

interface IComponentProps {
  title: string;
  desc: string;
  theme: string;
  img: string;
  grid: string;
}

class InfoLineItem extends Component<IComponentProps> {

  render() {
    const { title, desc, theme, img, grid } = this.props;

    return (
      <div className={`info-item ${grid}`}>
        <div className="info-item-inner">
          <div className="info-item-left">
            <div className={`info-item__img info-item__img_${theme}`}>
              <img src={img} alt="img" />
            </div>
          </div>
          <div className="info-item-right">
            <span className="info-item__title">{title}</span>
            <span className="info-item__desc">{desc}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoLineItem;
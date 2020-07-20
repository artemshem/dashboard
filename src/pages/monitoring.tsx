import React, { Component } from 'react';
import { logout } from '../redux/actions';
import store from '../redux/store';

class Monitoring extends Component<any, any> {

  componentDidMount = () => {
    let example = document.getElementById("example");

    let ctx = example.getContext('2d');
    example.width = 640;
    example.height = 480;

    ctx.strokeRect(15, 15, 266, 266);
    ctx.strokeRect(18, 18, 260, 260);
    ctx.fillRect(20, 20, 256, 256);
    for (let i = 0; i < 8; i += 2)
      for (let j = 0; j < 8; j += 2) {
        ctx.clearRect(20 + i * 32, 20 + j * 32, 32, 32);
        ctx.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32);
      }

  }

  render() {

    return (
      <div className="container-fluid">
        <canvas id='example'>Обновите браузер</canvas>
      </div>
    )
  }
}

export default Monitoring;
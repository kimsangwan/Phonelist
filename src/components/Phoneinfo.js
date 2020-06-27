import React, { Component } from 'react';

class Phoneinfo extends Component {
  render() {
    const { name, phone, id } = this.props.info;
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px',
    };
    return (
      <div>
        <div style={style}>
          <b>{name}</b>
        </div>
        <div>
          <b>{phone}</b>
        </div>
      </div>
    );
  }
}

export default Phoneinfo;

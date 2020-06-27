import React, { Component } from 'react';
import Phoneinfo from './Phoneinfo';

class PhoneinfoList extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    const list = data.map((info) => <Phoneinfo info={info} key={info.id} />);
    return <div>{list}</div>;
  }
}
export default PhoneinfoList;

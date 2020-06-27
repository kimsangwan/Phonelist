import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneinfoList from './components/PhoneinfoList';
import Phoneinfo from './components/Phoneinfo';

class App extends Component {
  id = 0;
  state = {
    information: [],
  };

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++,
      }),
    });
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneinfoList data={this.state.information} />
      </div>
    );
  }
}

export default App;

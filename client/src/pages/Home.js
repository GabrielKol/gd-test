import React, { Component } from 'react';
import AppHeader from '../components/AppHeader';
import AppForm from '../components/AppForm';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <AppHeader/>
        <AppForm/>
      </div>
    );
  }
}

export default Home;

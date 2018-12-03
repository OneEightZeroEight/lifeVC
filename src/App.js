import React, { Component } from 'react';
import Home from './components/pages/Home/Home';
import './styles/reset.scss';
class App extends Component {
  render() {
    return (
        <div className='app'>
          <Home></Home>
        </div> 
    )
  }
}

export default App;

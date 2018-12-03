import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from './components/pages/Home/Home';
import GoFree from './components/pages/GoFree/GoFree.jsx'
import './styles/reset.scss';
class App extends Component {
  render() {
    return (
        <div className='app'>
        <Route path="/home/" component={Home} />
        <Route path="/gofree/" component={GoFree}/>
        </div> 
    )
  }
}

export default App;

import React, { Component } from 'react';

import Footer from './components/commons/footer/Footer.jsx';
import './styles/reset.scss';
import { Route,Redirect,Switch} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className='app'>
          <Switch>
            <Route path="/footer/" component={Footer} />
            <Redirect from='/' to='/footer/home/'/>
          </Switch>
      </div> 
    )
  }
}

export default App;

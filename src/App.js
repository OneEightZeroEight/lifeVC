import React, { Component } from 'react';
import Footer from './components/commons/footer/Footer.jsx';
import List from './components/pages/List/List.jsx';
import './styles/reset.scss';
import { Route,Redirect,Switch} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className='app'>
          <Switch>
            <Route path="/footer/" component={Footer} />
<<<<<<< HEAD
            
=======
            <Route path="/list/:ItemIndexId/:filter" component={List} />
>>>>>>> 060048b149c6bb5a71c7a3c27e5c2aba84699736
            <Redirect from='/' to='/footer/home/'/>
          </Switch>
      </div> 
    )
  }
}

export default App;

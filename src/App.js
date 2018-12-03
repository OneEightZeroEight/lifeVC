import React, { Component } from 'react';
import Home from './components/pages/Home/Home';
// import GoFree from './components/pages/GoFree/GoFree.jsx'
import All from './components/pages/All/All';
import Cart from './components/pages/Cart/Cart';
import Stroll from './components/pages/Stroll/Stroll';
import User from './components/pages/User/User';
import Footer from './components/commons/footer/Footer.jsx';
import './styles/reset.scss';
import {Route,Redirect} from "react-router-dom";
class App extends Component {
  render() {
    return (
        <div className='app'>
         {/*<Redirect exact from='/' to='/home/'/>*/ }
          <Route path="/home/" component={Home}></Route>
          <Route path="/all/" component={All}></Route>
          <Route path="/stroll/" component={Stroll}></Route>
          <Route path="/cart/" component={Cart}></Route>
          <Route path="/user/" component={User}></Route>
          <Footer></Footer>
        </div> 
    )
  }
}

export default App;

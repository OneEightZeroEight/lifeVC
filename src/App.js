import React, { Component } from 'react';
// import Home from './components/pages/Home/Home';
import Product from './components/pages/Product/Product.jsx';
import Footer from './components/commons/footer/Footer.jsx';
import './styles/reset.scss';
class App extends Component {
  render() {
    return (
        <div className='app'>
          <Product></Product>
          <Footer></Footer>
        </div> 
    )
  }
}

export default App;

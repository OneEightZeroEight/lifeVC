import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from './components/pages/Home/Home';
// <<<<<<< HEAD
import GoFree from './components/pages/GoFree/GoFree.jsx'
// =======
import Footer from './components/commons/footer/Footer.jsx';
// >>>>>>> 7cae58304fbd3febd56c1afc02ad15dc0caaa400
import './styles/reset.scss';
class App extends Component {
  render() {
    return (
        <div className='app'>
// <<<<<<< HEAD
        // <Route path="/home/" component={Home} />
        // <Route path="/gofree/" component={GoFree}/>
// =======
          <Home></Home>
          <Footer></Footer>
// >>>>>>> 7cae58304fbd3febd56c1afc02ad15dc0caaa400
        </div> 
    )
  }
}

export default App;

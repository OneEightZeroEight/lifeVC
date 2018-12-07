import React, { Component } from 'react';
import Footer from './components/commons/footer/Footer.jsx';
import Login from './components/commons/Login/Login.jsx';
import List from './components/pages/List/List.jsx';
import Fuzzy from './components/pages/List/Fuzzy.jsx';
import Detail from './components/pages/Detail/detail.jsx';
import Setting from './components/commons/Setting';
import LearnMore from './components/pages/Home/LearnMore';
import Accont from "./components/pages/Accont/Accont.jsx";
import './styles/reset.scss';
// import '../node_modules/animate.css/animate.css';
import { Route,Redirect,Switch} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className='app'>
          <Switch>
            <Route path="/footer/" component={Footer} />
            <Route path="/list/:ItemIndexId/:filter" component={List} />
            <Route path="/list/:keywords" component={Fuzzy} />
            <Route path="/detail/:ItemInfoId" component={Detail} />
            <Route path='/setting/' component={Setting}></Route>
            <Route path="/login/" component={Login} />
            <Route path="/Accont/" component={Accont} />
            <Redirect from='/' to='/footer/home/index/'/>
          </Switch>
          <LearnMore></LearnMore>
      </div> 
    )
  }
}

export default App;

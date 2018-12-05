import React, { Component } from 'react';
import Footer from './components/commons/footer/Footer.jsx';
import List from './components/pages/List/List.jsx';
import Detail from './components/pages/Detail/Detail.jsx';
import LearnMore from './components/pages/Home/LearnMore';
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
            <Route path="/detail/:ItemInfoId" component={Detail} />
            <Redirect from='/' to='/footer/home/index/'/>
          </Switch>
          <LearnMore></LearnMore>
      </div> 
    )
  }
}

export default App;

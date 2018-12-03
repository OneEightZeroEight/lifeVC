import React from 'react';
import '../../../static/css/font-awesome.css';
import '../../../styles/footer.scss';
import Xiao from './xiao.jsx';
import Home from '../../pages/Home/Home';
import Cart from '../../pages/Cart/Cart';
import All from '../../pages/All/All';
import Stroll from '../../pages/Stroll/Stroll';
import User from '../../pages/User/User';
import {Route} from 'react-router-dom';
class Footer extends React.Component {
    render(){
        return(
            <div>
                <Xiao></Xiao>
                <Route path="/footer/home/" component={Home} />
                <Route path="/footer/all/" component={All} />
                
                <Route path="/footer/stroll/" component={Stroll} />
                <Route path="/footer/cart/" component={Cart} />
                <Route path="/footer/user/" component={User} />
            </div>
        )
        
    }
   
}
export default Footer;
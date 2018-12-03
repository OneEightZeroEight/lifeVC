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
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            footerList: [
                // { title: '首页',pic:'fa fa-home', },
                // { title: '全部商品',pic:'fa fa-list-ul'},
                // { title: '闲逛',pic:'fa fa-paw' },
                // { title: '购物车',pic:'fa fa-shopping-cart' },
                // { title: '账户中心',pic:'fa fa-user' },
                { title: '首页',pic:'fa fa-home' ,path:'/footer/home'},
                { title: '全部商品',pic:'fa fa-list-ul',path:'/footer/all'},
                { title: '闲逛',pic:'fa fa-paw',path:'/footer/stroll'},
                { title: '购物车',pic:'fa fa-shopping-cart',path:'/footer/cart'},
                { title: '账户中心',pic:'fa fa-user',path:'/footer/user'},

            ],
            sele:Number(sessionStorage.getItem('sele')) || 0
        }
    }
    changeSele(index){
        this.setState({
            sele: index
        });
        window.sessionStorage.setItem('sele',index);
    }
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
export default Header;
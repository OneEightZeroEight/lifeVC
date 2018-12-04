import React from 'react';
import { connect } from 'react-redux';
import "../../../styles/car.scss"
import '../../../static/css/font-awesome.css';
import {Link} from 'react-router-dom';
class Cart extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
        }
    }
    componentDidMount(){
        this.props.changeSele();
    }
    render(){
        return (
            <div className='cart'>
            <div className="Top">

            <Link to="/footer/stroll/"><i className="fa fa-chevron-left" aria-hidden="true"></i></Link>
            <p className="header-title">购物车</p>
            </div>
            <div  className="login-wrap">
            <div className="login"><Link to="/footer/user/" className="logins">登录</Link>
             <span className="tips">你可以在登录后同步电脑与手机购物车中的商品</span>
            </div>
            </div>
            <div className="change"><a href="javascript:;" id="hideAclick"></a>
              <input type="text" maxlength="15" placeholder="礼品兑换处，请输入兑换码" className="ipts"/>
              <input type="button" value="兑换" className="exch-btn"/>
            </div>
            </div>
        )
    }
}
export default connect((state)=>{
    return state
},(dispatch=>{
    return {
        changeSele() {
            dispatch({
                type:"toggleGallery",
                sele:3
            })
        }
    }
}))(Cart);
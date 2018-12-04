import React from 'react';
import Swiper from 'swiper';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import '../../../../../node_modules/swiper/dist/css/swiper.min.css';
import '../../../../styles/top.scss';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            navList: [
                { title: '首页' ,path:'/footer/home/index/'},
                { title: '新品' ,path:'/footer/home/newArrive/'},
                { title: '家务' ,path:'/footer/home/channel/2860'},
                { title: '下厨' ,path:'/footer/home/channel/2859'},
                { title: '生活' ,path:'/footer/home/channel/2861'},
                { title: '家居服' ,path:'/footer/home/channel/2865'},
                { title: '床品' ,path:'/footer/home/channel/2862'},
                { title: '沐浴洗漱' ,path:'/footer/home/channel/3526'}
            ],
            sel: Number(sessionStorage.getItem('sel')) || 0
        }
    }
    bianhua(nextProps){
        this.setState({
            sel: nextProps.sel
        });
        window.sessionStorage.setItem('sel', nextProps.sel);
    }
    componentWillReceiveProps(nextProps){
        this.bianhua(nextProps);
    }
//首页轮播图部分 在componentDidMount(){}生命周期中写轮播js
    componentDidMount() {
        var headerSwiper = new Swiper('#header', {
            freeMode: true,
            slidesPerView: 4.5,
            on: {
                click: function () {
                    headerSwiper.slideTo(Number(sessionStorage.getItem('sel')) - 1,300);
                }
            }
        })
        if (this.state.sel !== 0) {
            headerSwiper.slideTo(this.state.sel - 1);
        }
         this.props.changeSele();
    }
    
    render() {
        return (
            <div className="header">
                <div className="top">
                    <div className="headInfo">
                        <Link to='/footer/all/' className="toSearch" onClick={this.toAll}></Link>
                    </div>
                </div>
                <div className="nav">
                    <div className="swiper-container" id='header'>
                        <div className="swiper-wrapper">
                            {
                                this.state.navList.map((item, index) => {
                                    return <Link to={item.path} key={index} onClick={this.props.changeSel.bind(this, index)} className={this.state.sel === index ? "sel swiper-slide" : "swiper-slide"}>
                                        {item.title}
                                    </Link>
                                })
                            }
                            <div className='swiper-slide'>了解lifeVC</div>
                        </div>
                    </div>
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
                sele:0
            })
        },
        changeSel(index) {
            this.setState({
                sel: index
            });
            window.sessionStorage.setItem('sel', index);
            dispatch({
                type:"toggleNav",
                sel:index
            })
        }
    }
}))(Header);
import React from 'react';
import Swiper from 'swiper';
import '../../../../../node_modules/swiper/dist/css/swiper.min.css';
import '../../../../styles/top.scss';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            navList: [
                { title: '首页' },
                { title: '新品' },
                { title: '家务' },
                { title: '下厨' },
                { title: '生活' },
                { title: '家居服' },
                { title: '床品' },
                { title: '沐浴洗漱' },
                { title: '了解lifeVC' },
            ],
            sel: Number(sessionStorage.getItem('sel')) || 0
        }
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
    }
    changeSel(index) {
        this.setState({
            sel: index
        });
        window.sessionStorage.setItem('sel', index);
    }
    render() {
        return (
            <div className="header">
                <div className="top">
                    <div className="headInfo">
                        <div className="toSearch"></div>
                    </div>
                </div>
                <div className="nav">
                    <div className="swiper-container" id='header'>
                        <div className="swiper-wrapper">
                            {
                                this.state.navList.map((item, index) => {
                                    return <div key={index} onClick={this.changeSel.bind(this, index)} className={this.state.sel === index ? "sel swiper-slide" : "swiper-slide"}>
                                        {item.title}
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;
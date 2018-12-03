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
            sel: Number(localStorage.getItem('sel')) || 0
        }
    }
    componentDidMount() {
        var mySwiper = new Swiper('.swiper-container', {
            freeMode: true,
            slidesPerView: 4.5,
            on: {
                click: function () {
                    mySwiper.slideTo(Number(localStorage.getItem('sel')) - 1,300);
                }
            }
        })
        if (this.state.sel !== 0) {
            mySwiper.slideTo(this.state.sel - 1);
        }
    }
    changeSel(index) {
        this.setState({
            sel: index
        });
        window.localStorage.setItem('sel', index);
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
                    <div className="swiper-container">
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
import React from 'react';
import '../../../static/css/font-awesome.css';
import '../../../styles/footer.scss';

import { Link } from 'react-router-dom';
class Xiao extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            footerList: [
                { title: '首页', pic: 'fa fa-home', path: '/footer/home' },
                { title: '全部商品', pic: 'fa fa-list-ul', path: '/footer/all' },
                { title: '闲逛', pic: 'fa fa-paw', path: '/footer/stroll' },
                { title: '购物车', pic: 'fa fa-shopping-cart', path: '/footer/cart' },
                { title: '账户中心', pic: 'fa fa-user', path: '/footer/user' },

            ],
            sele: Number(sessionStorage.getItem('sele')) || 0
        }
    }
    changeSele(index) {
        this.setState({
            sele: index
        });
        window.sessionStorage.setItem('sele', index);
    }
    render() {
        return (
            <footer>
                {
                    this.state.footerList.map((item, index) => {
                        return <Link to={item.path}
                            key={index}
                            onClick={this.changeSele.bind(this, index)}
                            className={this.state.sele === index ? 'sele box' : 'box'}>
                            <i className={item.pic} aria-hidden="true"></i>
                            <span>{item.title}</span>
                        </Link>

                    })
                }
            </footer>
        )

    }

}
export default Xiao;
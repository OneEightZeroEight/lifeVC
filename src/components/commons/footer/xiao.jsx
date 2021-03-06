import React from 'react';
import { connect } from 'react-redux';
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
            length: 0,
            sele: Number(sessionStorage.getItem('sele')) || 0
        }
    }
    bianhua(nextProps) {
        this.setState({
            sele: nextProps.sele
        });
        window.sessionStorage.setItem('sele', nextProps.sele);
    }
    componentWillReceiveProps(nextProps) {
        this.bianhua(nextProps);
        this.changeCount(nextProps);
    }
    componentWillMount() {
        if(window.localStorage.getItem('userId')){
            let kong = JSON.parse(window.localStorage.getItem('detailCarts'));
            if(kong != null){
                let user = window.localStorage.getItem('userId');
                let qty=0;
                for(let i=0;i<kong.length;i++){
                    if(kong[i].yhm == user){
                        qty+=kong[i].nums;
                    }
                }
                this.setState({
                    length:qty
                })
            }
            // let shopItem = JSON.parse(window.localStorage.getItem('detailCarts')) || [];
            // let length = 0;
            // shopItem.forEach((item,index)=>{
            //     length += item.nums;
            // })
            // this.setState(
            //     Object.assign({}, { length })
            // )
        }
    }
    changeCount(nextProps){
        let length = nextProps.goodsCount || 0;
        this.setState(
            Object.assign({}, { length })
        )
    }
    render() {
        return (
            <footer className='commonFooter'>
                {
                    this.state.footerList.map((item, index) => {
                        return <Link to={item.path}
                            key={index}
                            onClick={this.props.changeSele.bind(this, index)}
                            className={this.state.sele === index ? 'selectedOne box' : 'box'}>
                            <i className={item.pic} aria-hidden="true"></i>
                            <span>{item.title}</span>
                        </Link>

                    })
                }
                {
                    (() => {
                        if (this.state.length != 0) {
                            return <span className="shopCount">{this.state.length}</span>
                        }
                    })()
                }
            </footer>
        )

    }

}
export default connect((state) => {
    return state
}, (dispatch => {
    return {
        changeSele(index) {
            this.setState({
                sele: index
            });
            window.sessionStorage.setItem('sele', index);
            dispatch({
                type: "toggleGallery",
                sele: index
            })
        },
        changegoodsCount(counts){
            dispatch({
                type:"changegoodsCount",
                goodsCount:counts
            })
        }
    }
}))(Xiao);
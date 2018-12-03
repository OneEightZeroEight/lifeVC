import React from 'react';
import '../../../static/css/font-awesome.css';
import '../../../styles/footer.scss';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            footerList: [
                { title: '首页',pic:'fa fa-home' },
                { title: '全部商品',pic:'fa fa-list-ul'},
                { title: '闲逛',pic:'fa fa-paw' },
                { title: '购物车',pic:'fa fa-shopping-cart' },
                { title: '账户中心',pic:'fa fa-user' },
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
            <footer>
                {
                    this.state.footerList.map((item,index)=>{
                        return <div key={index} onClick={this.changeSele.bind(this, index)} className={this.state.sele === index?'sele':''}><i className={item.pic} aria-hidden="true"></i><span>{item.title}</span></div>
                    })
                }
            </footer>
        )
        
    }
   
}
export default Header;
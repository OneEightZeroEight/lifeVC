import React from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import '../../../static/css/font-awesome.css';
import "../../../styles/detail.scss";
import {Toast} from 'antd-mobile';
// import "http://res.wx.qq.com/open/js/jweixin-1.0.0.js";
class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            details: [],
            Detail: [],
            Notice: [],
            desc: [],
            sels: 0,
            name: "",
            price: "",
            activePrice:0,
            nums: 1,
            CommentCount: 0,
            ifFixed: false,
            CommentList: [],
            Specifications: [],
            saleTag: [],
            Caption: '',
            prompts: [],
            ifLogin: window.localStorage.getItem('ifLogin') || false,
            center: [],
            goodId:'',
            qty:0
        }
    }

    // componentDidUpdate
    // 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点.由于初始时数据由ajax请求,初始可能没获取到数据，只有等数据获取到后，才调用
    componentDidUpdate() {

        // <!-- Initialize Swiper -->
        var swiper1 = new Swiper('#detail', {
            spaceBetween: 30,
            pagination: {
                el: '#detailPag'
            },
        });
        var swiper2 = new Swiper('#center', {
            slidesPerView: 3,
            spaceBetween: 30
        });
    }
    change(val) {
        this.setState({
            sels: val
        })
    }
    toComment() {
        this.setState({
            sels: 2
        })
    }
    addToCart(){
        
        // localStorage.removeItem('detailCarts')
        //存储的数据
       
        if(!window.localStorage.getItem('userId')){
            Toast.fail('请先登录', 2);
        }else{
            let name = this.state.name,nums = this.state.nums, goodId = this.state.goodId,goodPic = 'http://i.lifevc.com' + this.state.details[0].ImageUrl,status = true;
            let yhm = window.localStorage.getItem('userId');
            let toCartObj = {name,nums,goodId,goodPic,status,yhm};
            if (this.state.activePrice == 0){
                toCartObj.price = Number(this.state.price);
            }else{
                toCartObj.price = Number(this.state.activePrice);
            }
            React.axios.get("http://localhost:3001/goods/goodsAdd",{params:toCartObj})
            .then((res)=>{
                if(res.data.err == 0){
                    if(JSON.parse(window.localStorage.getItem('detailCarts'))){
                        let kong = JSON.parse(window.localStorage.getItem('detailCarts'));
                        let haooo=false;
                        let shu =0;
                        for(let i=0;i<kong.length;i++){
                            if(kong[i].name==toCartObj.name){
                                haooo=true;
                                shu = (kong[i].nums-0) + (toCartObj.nums-0);
                                kong[i].nums=shu;
                            }
                        }
                        if(!haooo){
                            kong.push(toCartObj);
                        }
                        // if(kong.indexOf(toCartObj)!=-1){
                        //     kong[kong.indexOf(toCartObj)].nums+=toCartObj.nums;
                        // }else{
                        //     kong.push(toCartObj);
                        // }
                        window.localStorage.setItem('detailCarts',JSON.stringify(kong));
                        let qty=0;
                        for(let i=0;i<kong.length;i++){
                            qty+=kong[i].nums;
                        }
                       this.setState({
                            qty:qty
                        })
                    }else{
                        let kong = [];
                        kong.push(toCartObj);
                        window.localStorage.setItem('detailCarts',JSON.stringify(kong));
                        this.setState({
                            qty:toCartObj.nums
                        })
                    }
                }else{
                    alert("错误");
                }
            })
            
        }
        
    }
    componentWillUnmount() {
        window.onscroll = () => {
            return
        }
    }
    componentDidMount() {
        if(window.localStorage.getItem('userId')){
            if(JSON.parse(window.localStorage.getItem('detailCarts'))){
                let kong = JSON.parse(window.localStorage.getItem('detailCarts'));
                let qty=0;
                for(let i=0;i<kong.length;i++){
                    qty+=kong[i].nums;
                }
               this.setState({
                    qty:qty
                })
            }
        }else{
            this.setState({
                qty:0
            })
        }
        //获取传过来的id
        let ItemInfoId = this.props.match.params.ItemInfoId
        React.axios.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/items/itemview?Iteminfoid=' + ItemInfoId + '&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
        .then((res) => {
            if(res.statusText == 'OK'){
                this.setState({
                    details: res.data.InnerData.Headers,
                    name: res.data.InnerData.Name,
                    price: res.data.InnerData.SalePrice,
                    center: res.data.InnerData.BuyWith,
                    Detail: res.data.InnerData.Details,
                    CommentList: res.data.InnerData.CommentList,
                    Specifications: res.data.InnerData.Specifications,
                    Notice: res.data.InnerData.Notice,
                    CommentCount: res.data.InnerData.CommentCount,
                    desc: [
                        { title: '商品详情' },
                        { title: '规格参数' },
                        { title: '评论', CommentCount: res.data.InnerData.CommentCount }
                    ],
                    saleTag: res.data.InnerData.SaleTags,
                    Caption: res.data.InnerData.Caption,
                    prompts: res.data.InnerData.Prompts,
                    activePrice: res.data.InnerData.ActivityPrice,
                    goodId:res.data.InnerData.ItemInfoId
                });
            }
        })
        .catch((err) => {
            console.log(err);
        })
        window.onscroll = () => {
            if (window.scrollY >= this.refs.scrollBox.clientHeight) {
                this.setState({
                    ifFixed: true
                })
            } else {
                this.setState({
                    ifFixed: false
                })
            }
        }
    }
    adds() {
        this.setState({
            nums: this.state.nums + 1
        })
    }
    jian() {
        if (this.state.nums == 1) {
            this.setState({
                nums: 1
            })
        } else {
            this.setState({
                nums: this.state.nums - 1
            })
        }
    }
    backTo(){
        this.props.history.go(-1);
    }
    render() {
        return (
            <div className='detail'>
                <div id="tops">
                    
                        <i className="fa fa-chevron-left" aria-hidden="true" onClick={this.backTo.bind(this)}></i>
                    
                    <span className="titles">商品介绍</span>
                    <i className="fa fa-share-square-o" aria-hidden="true"></i>
                </div>
                <div className="scrollBox" ref="scrollBox">
                    <div className="swiper-container" id="detail">
                        <div className="swiper-wrapper">
                            {
                                this.state.details.map((item, index) => {
                                    return <div className="swiper-slide" key={index}>

                                        <img src={'http://i.lifevc.com' + item.ImageUrl} alt='' />
                                    </div>
                                })
                            }

                        </div>
                        <div className="swiper-pagination" id='detailPag'></div>
                    </div>
                    <p className='goodName'>
                        <span>{this.state.name}</span>
                        <span>{this.state.Caption}</span>
                    </p>
                    {
                        (()=>{
                            if(this.state.activePrice == '0'){
                                return <p className='goodPrice'>￥{this.state.price}</p>
                            }else{
                                return <p className='goodPrice'><span
                                    style={{
                                        'color':'#c00'
                                    }}
                                >￥{this.state.activePrice}</span><span style={{
                                    'text-decoration': 'line-through'
                                }}>￥{this.state.price}</span></p>
                            }
                        })()
                    }
                    <p className="saleType">{
                        (() => {
                            if (this.state.saleTag != [] && this.state.saleTag != null) {
                                return this.state.saleTag.map((item, index) => {
                                    return <span key={index}
                                        style={{
                                            'background': '#' + item.BGColor,
                                            'color': '#' + item.Color
                                        }}
                                    >{item.Text}</span>
                                })
                            }
                        })()
                    }
                    </p>
                    <div className="promptsBox">
                        {
                            (() => {
                                if (this.state.prompts != []) {
                                    return this.state.prompts.map((item, index) => {
                                        return <p key={index}>
                                            <span style={{
                                                'background': '#' + item.Tag.BGColor,
                                                'color': '#' + item.Tag.Color
                                            }}>{item.Tag.Text}</span>
                                            <span>{item.Text}</span>
                                        </p>
                                    })
                                }
                            })()
                        }
                    </div>
                    {
                        (() => {
                            if (!this.state.ifLogin) {
                                return <div className="promo-item">
                                    <span className="tag-promo bgred">优惠</span>
                                    <Link to="/footer/login/"><span className="m-txt red">登录查看你的积分和优惠券</span>
                                    </Link>
                                </div>
                            } else {
                                return <div className="promo-item">
                                    <span className="tag-promo bgred">优惠券</span>
                                    <a><span className="m-txt red">没有可用的优惠券</span>
                                    </a>
                                </div>
                            }
                        })()
                    }
                    {/*修改数量部分*/}
                    <div className="numbers">
                        <span className="shul">数量 :</span>
                        <span className="wrap">
                            <button className="jian" onClick={this.jian.bind(this)}>-</button>
                            <span className="qtys">{this.state.nums}</span>
                            <button className="add" onClick={this.adds.bind(this)}>+</button>
                        </span>
                    </div>
                    {
                        (()=>{
                            if(this.state.center == null){
                                return <div className="mattop"
                                    style={{'height':'0'}  
                                    }
                                ></div>
                            }
                            else{
                                return  <div className="mattop">
                                    <div className="titBox">
                                    <p className="tit"><span>还有更多可选</span></p>
                                    </div>
                                    {/*中间轮播图部分*/}
                                    <div className="swiper-container" id="center">
                                        <div className="swiper-wrapper">
                                            {
                                                this.state.center.map((item, index) => {
                                                    return <div className="swiper-slide" key={index}>
                                                        <img src={'http://i.lifevc.com' + item.ImageUrl} />
                                                        <p>{item.Name}</p>
                                                        <p>￥{item.SalePrice}</p>
                                                    </div>
                                                })
                                            }
            
                                        </div>
                                    </div>
                                </div>
                            }
                        })()
                    }
                    <div className="ts">
                        <img src="http://i.lifevccdn.com/upload/combinationchart/bbfd6535985949fe8bbd9b9eaad5909e.jpg" />
                    </div>
                </div>

                {/*商品详情及参数评论*/}
                <div className="desc"
                    style={{
                        'position': this.state.ifFixed ? 'fixed' : 'relative',
                        'marginTop': 0
                    }}
                >
                    {
                        this.state.desc.map((item, index) => {
                            return <span key={index} onClick={this.change.bind(this, index)} className={this.state.sels === index ? "HeHe" : ""}>{item.title}
                                {item.CommentCount != null ? '(' + item.CommentCount + ')' : ''}
                            </span>
                        })
                    }
                </div>
                <div>{
                    (() => {
                        if (this.state.sels == 0) {
                            return <ul className="xiangqing">
                                {
                                    this.state.Detail.map((item, index) => {
                                        return <li key={index}><img src={'http://i.lifevc.com' + item.ImageUrl} /></li>
                                    })

                                }
                            </ul>
                        }
                    })()
                }</div>
                <div>{
                    (() => {
                        if (this.state.sels == 1) {
                            return <div className="guige">
                                {
                                    this.state.Specifications.map((item, index) => {
                                        return <div key={index}><span>{item.Name}:</span><span>{item.Value}</span></div>
                                    })
                                }
                            </div>
                        }
                    })()
                }</div>
                <div>{
                    (() => {
                        if (this.state.sels == 1) {
                            return <div className="guigeBtm">
                                {
                                    this.state.Notice.map((item, index) => {
                                        return <div className='noBox' key={index}>{item}</div>
                                    })
                                }
                            </div>

                        }
                    })()
                }</div>

                <div>{
                    (() => {
                        if (this.state.sels == 2) {
                            return <ul className="descss">
                                {
                                    this.state.CommentList.map((item, index) => {
                                        return <li key={index}>
                                            <p className='uMsg'>
                                                <span>{item.CustomerCity}</span>
                                                <span>{item.CustomerName}</span>
                                                <span>{item.CustomerLevelName}</span>
                                                <span>累计购物: {item.BuyCount}</span>
                                            </p>
                                            <p className='commitContent'>{item.Content}</p>
                                            <p className="buyWhat">
                                                {item.CreatedAt} {item.Target}
                                            </p>
                                        </li>
                                    })
                                }
                            </ul>
                        }

                    })()
                }</div>
                <div>{
                    (() => {
                        if (this.state.sels == 0) {
                            return <div><span className="pls">会员使用评论({this.state.CommentCount}条)<i className="fa fa-chevron-right" aria-hidden="true"></i>
                            </span>
                                <ul className="pinglun">
                                    {
                                        this.state.CommentList.map((item, index) => {
                                            return <li key={index}>
                                                <p className='uMsg'>
                                                    <span>{item.CustomerCity}</span>
                                                    <span>{item.CustomerName}</span>
                                                    <span>{item.CustomerLevelName}</span>
                                                    <span>累计购物: {item.BuyCount}</span>
                                                </p>
                                                <p className='commitContent'>{item.Content}</p>
                                                <p className="buyWhat">
                                                    {item.CreatedAt} {item.Target}
                                                </p>
                                            </li>

                                        })
                                    }
                                    <div className="lookMore" onClick={this.toComment.bind(this)}>查看更多</div>
                                </ul>
                            </div>
                        }
                    })()
                }</div>

                {/*footer部分*/}
                <div className="bottoms">
                    <div>
                        <i className="fa fa-user-md" aria-hidden="true"></i>
                        <p>客服</p>
                    </div>
                    <div>
                        <Link to="/footer/home">
                            <i className="fa fa-home" aria-hidden="true"></i>
                            <p>首页</p>
                        </Link>
                    </div>
                    <div className="car">
                        <Link to="/footer/cart">
                            <span className="addcar">{this.state.qty}</span>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </Link>
                    </div>
                    <button className="buttons" onClick={this.addToCart.bind(this)}>加入购物车</button>
                </div>
            </div>
        )
    }

}
export default Detail
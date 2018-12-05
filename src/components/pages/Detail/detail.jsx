import React from 'react';
import {Link} from 'react-router-dom';
import Swiper from 'swiper';
import "../../../styles/detail.scss"
class Detail extends React.Component{
	constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            details:[],
            name:"",
            price:"",
            nums:1,
            center:[{ImageUrl: "/upload/AppItemHeaders/503bd2cd7084496194bd9bc410c79d65.jpg",Name: "加拿大原生木浆抽纸(3包装)",SalePrice:29},
            {ImageUrl: "/upload/AppItemHeaders/503bd2cd7084496194bd9bc410c79d65.jpg",Name: "加拿大原生木浆抽纸(3包装)",SalePrice:29},
            {ImageUrl: "/upload/AppItemHeaders/503bd2cd7084496194bd9bc410c79d65.jpg",Name: "加拿大原生木浆抽纸(3包装)",SalePrice:29},
            {ImageUrl: "/upload/AppItemHeaders/503bd2cd7084496194bd9bc410c79d65.jpg",Name: "加拿大原生木浆抽纸(3包装)",SalePrice:29},
            {ImageUrl: "/upload/AppItemHeaders/503bd2cd7084496194bd9bc410c79d65.jpg",Name: "加拿大原生木浆抽纸(3包装)",SalePrice:29},
            ]
        }
    }
    // componentDidUpdate
    // 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点.由于初始时数据由ajax请求,初始可能没获取到数据，只有等数据获取到后，才调用
    componentDidUpdate(){
          // <!-- Initialize Swiper -->
    var swiper = new Swiper('#detail', {
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    var swiper = new Swiper('#center', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    }
    componentDidMount(){
    	//获取传过来的id
    	let ItemInfoId = this.props.match.params.ItemInfoId
    	console.log(ItemInfoId)
         React.axios.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/items/itemview?Iteminfoid='+ItemInfoId+'&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
        .then((res)=>{
            if(res.data.InnerData.BuyWith==null){
                this.setState({
                   details:res.data.InnerData.Headers,
                   name:res.data.InnerData.Name,
                   price:res.data.InnerData.SalePrice,
                });
            }else{
                this.setState({
                   details:res.data.InnerData.Headers,
                   name:res.data.InnerData.Name,
                   price:res.data.InnerData.SalePrice,
                   center:res.data.InnerData.BuyWith
                });
            }
            console.log(res)
            
        })
        .catch((err)=>{
            console.log(err);
        })

    }
    adds(){
           this.setState({
                 nums:this.state.nums+1
            })    
         }
     jian(){
            if(this.state.nums==0){
                    this.setState({
                        nums:0
                    })
                }else{
               this.setState({
                nums:this.state.nums-1
            })
           }
              
            
        }
        
    render(){
        return (
            <div className='detail'>
            <div id="tops">
             <Link to="/footer/cart/">
             <i className="fa fa-chevron-left" aria-hidden="true"></i>
             </Link>
            <span className="titles">商品介绍</span>
            <i className="fa fa-share-square-o" aria-hidden="true"></i>
            </div>
            
            <div className="swiper-container" id="detail">
            <div className="swiper-wrapper">
            {
                 this.state.details.map((item,index)=>{
                    return <div className="swiper-slide" key={index}>

                    <img src={'http://i.lifevc.com'+item.ImageUrl} alt=''/>
                     </div>
                 })
            }

       </div>
      <div className="swiper-pagination"></div>
        </div>
         <h3>{this.state.name}</h3>
         <h4>￥{this.state.price}</h4>
         <div  className="promo-item">
             <span className="tag-promo bgred">优惠</span> 
             <Link to="/footer/user/"><span  className="m-txt red">登录查看你的积分和优惠券</span>
             </Link>
         </div>
         {/*修改数量部分*/}
          <div className="numbers">
          <span className="shul">数量 :</span>
          <span className="wrap">
          <button className="jian"onClick={this.jian.bind(this)}>-</button>
          <span className="qtys">{this.state.nums}</span>
          <button className="add" onClick={this.adds.bind(this)}>+</button>
          </span>
         </div>
         <h6>新会员首单,满{this.state.price}元免运费</h6>
        <div className="mattop">
             <h3 className="tit">&nbsp;&nbsp;&nbsp;&nbsp;还有更多可选</h3>
            <div className="swiper-container" id="center">
             <div className="swiper-wrapper">
            {
                 this.state.center.map((item,index)=>{
                    return <div className="swiper-slide" key={index}>
                    <img src={'http://i.lifevc.com'+item.ImageUrl}/>
                    {item.Name}
                    <p>￥{item.SalePrice}</p>
                    </div>
                 })
            }

            </div>
        </div>
         </div>
            <div className="ts">
            <img src="http://i.lifevccdn.com/upload/combinationchart/bbfd6535985949fe8bbd9b9eaad5909e.jpg"/>
           </div>
        </div>
        )
    }

}
export default Detail
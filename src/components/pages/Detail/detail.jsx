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
            price:""
        }
    }
    componentDidUpdate(){
          // <!-- Initialize Swiper -->
    var swiper = new Swiper('#detail', {
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
            console.log(res);
            this.setState({
               details:res.data.InnerData.Headers,
               name:res.data.InnerData.Name,
               price:res.data.InnerData.MarketPrice
            });
            console.log(res.data.InnerData.Name)
        })
        .catch((err)=>{
            console.log(err);
        })
        
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
                    return <div className="swiper-slide"key={index}>
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
             <span  className="m-txt red">登录查看你的积分和优惠券</span>
         </div>
        </div>
        )
    }

}
export default Detail
import React from 'react';
import "../../../styles/accont.scss";
class Accont extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
   
    }
    render(){
        return( 
        <div id="accont"> 
          <div className="atb">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            <span className="accont">确认订单</span>
            <span></span>
         </div>
          <div className="aCenters">
              <div className="pay">
              <div className="address">
              <span><i class="fa fa-map-marker" aria-hidden="true"></i>
                收件人:
              </span>
              <span><i class="fa fa-angle-right" aria-hidden="true"></i></span> 
              </div>
              <div className="time">
              <span >买家商品时间选择</span>
              <span><i class="fa fa-angle-right" aria-hidden="true"></i></span> 
              </div>
              <div className="method">
              <span>支付方式</span>
              <span className="zhifu"><i class="fa fa-angle-down" aria-hidden="true"></i></span>
              </div>
              <div className="zf">
                zhifu 
              </div>
              <div className="fp">
              <span>发票信息</span>
              <span className="no">无需发票</span>
               <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
              </div>
                <div className="know">
                <span>积分和劵不能同时使用,</span><a>了解详情</a>
               </div>
              </div>
          </div>
        <div className="aFooter">
          <div className="aleft">
          <span>本单你只需支付</span>
          </div>
          <button className="aright">提交订单</button>
        </div>
        </div>     
        )
    }
   


    }
    export default Accont;
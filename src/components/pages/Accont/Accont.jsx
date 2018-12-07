import React from 'react';
import "../../../styles/accont.scss";
import {Link} from 'react-router-dom';
class Accont extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state={
        shoop:JSON.parse(window.localStorage.getItem('detailCarts'))

        }
          console.log(JSON.parse(window.localStorage.getItem('detailCarts')))
    }
    tj(){
     alert("提交成功")
    }
    render(){
        return( 
        <div id="accont"> 
          <div className="atb">

          <Link to="/footer/cart"><i className="fa fa-chevron-left" aria-hidden="true"></i></Link>
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
              <span><i class="fa fa-check-circle-o" aria-hidden="true"></i></span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAzCAMAAADivasmAAAAw1BMVEUAAADphR7phR7phR7phR7phR7phR7phR7phR7phR7phR7phR7phR7phR7phR7phR7phR7phR7phR7phR7phR7phR7phR7////tnEj42bj76NX64Mf++vb//fvqhyL2yp3tmkTskjbqiij+9/H98+j87+H769nzvYTslDr++fT648v0xZPyt3v87N375c/53L341rP30Kf1x5bwqV/slj7rjzDrjSz538T0wo3xr2zwrWbuolP+/PjytHT98OP3063yuX4ljg+qAAAAFnRSTlMA7yCDBOTWuXNFCvjz4My+rpZaTh0TNvHUpAAAAfJJREFUSMfV0tdy4jAYhmGxNiSQ3vS5V4wB03tJ2fu/qpW0XmO8CkEnmclzxAzz+v8tmfzT+vWFFjnyrDXolxracxHo2hU9y5Wm5ytd0LNdtMQMVig0fM4lVXJJyMu1WnL9woeojrlTTe5IjcqEqe9nAypTI1TKBGNRqe9PFkbBBjM0DiJ5YuNze3mSmYU2mNg8CGjhR5wYs+oy/51YcCrxIdM/laTWXyM7B24qT+QMcG8qSQYuVEi8dvEq0sRbdkOPHtnme0mTvd9xAbjJ5Pfi8JAhmHYkS4I+SoabvErBDagkmTuA2zEzf2J3HHD2lq24EL8tT5IEDl77mxUVop3pinUywwLjGlSSjOEMy3+Esx6491EMpFSSRC6syr7LPEIyDmRJANcNacVy7CCv/LlXTQwkWFXvcApn9Ipcz3zrHiUhOqiMD20wjumg0J5s5gsvT+h7gs3xpcfgZnSZxShzE/tjxpPUdXoGLRhrcPFOnPmggwqeeKMReukqv5YxhElxIvtpr5IwS9sCu80Pf2o7ENZ7WhJtx045EQbr8pv6Aa2K5uy7LRLB283WSRy3+9OBQT+xmqcT1hGqyOuSumpTJ/eqyT15VE0eiX6jVtzohDypJU+E0VQKjQiaWiE0G+cFjSYp6M2H23rtpPrtQ1Mn3B8Ix+AI78aWQgAAAABJRU5ErkJggg=="/>
              <span className="wy">支付宝网页版</span>
              <span className="ying">抽奖赢礼券,最高188元</span>
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
          <div className="show">

          {
              this.state.shoop.map((item,index)=>{
              return <img src={item.goodPic}/>

              })
          }
          </div>
        <div className="aFooter">
          <div className="aleft">
          <span>本单你只需支付</span>
          <p>￥{this.state.shoop[0].price}</p>
          </div>
          <button className="aright" onClick={this.tj.bind(this)}>提交订单</button>
        </div>
        </div>     
        )
    }
   


    }
    export default Accont;
import React from 'react';
import { connect } from 'react-redux';
import '../../../styles/user.scss';
class User extends React.Component{
	constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            bottomList:[]
        }
    }
	componentDidMount(){
        this.props.changeSele();
        this.getBottomData();
    }
    getBottomData(){
        React.axios.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/contents/usercenter?si=lC5v9sXQoXgBMV1/nIxWta4L5ppi1pzaqS9JV082v8xEg4h7nY6MSTi2ixrCGZEbGlV1/7ZCdJM=&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
        .then((res)=>{
            if(res.statusText === 'OK'){
                this.setState({
                    bottomList:res.data.InnerData.CenterMenus
                })
                console.log(this.state.bottomList);
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    render(){
        return (
            <div className='user'>
                <div className="userTop">
                    <span></span>
                    <span className='countCenter'>账户中心</span>
                    <span className='userOptions'>设置</span>
                </div>
                <div className="userStatus">
                    <p className='noLogin'>您还未登录</p>
                    <div className="userBox">
                        <span className='userLogin'>登录</span>
                        <span className='userReg'>注册</span>
                    </div>
                </div>
                <div className="userOperate">
                    <ul>
                        <li><span className='optBg optBg1'></span><span className='optWord'>待支付</span></li>
                        <li><span className='optBg optBg2'></span><span className='optWord'>待发货</span></li>
                        <li><span className='optBg optBg3'></span><span className='optWord'>待收货</span></li>
                    </ul>
                    <ul>
                        <li><span className='optBg optBg4'></span><span className='optWord'>待评论</span></li>
                        <li><span className='optBg optBg5'></span><span className='optWord'>回复</span></li>
                        <li><span className='optBg optBg6'></span><span className='optWord'>退换货</span></li>
                    </ul>
                </div>
                <div className="userBottom">
                    {/* {
                        this.state.bottomList.map((item,index)=>{
                            return <div className=''>
                        })
                    } */}
                </div>
            </div>
        )
    }
}
export default connect((state)=>{
    return state
},(dispatch=>{
    return {
        changeSele() {
            dispatch({
                type:"toggleGallery",
                sele:4
            })
        }
    }
}))(User);
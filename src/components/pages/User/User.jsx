import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import '../../../styles/user.scss';
class User extends React.Component{
	constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            bottomList:[],
            rootPath:'http://i.lifevccdn.com',
            ifLogin:window.localStorage.getItem('ifLogin') || false,
            userId:window.localStorage.getItem('userId') || '',
            userPassword:window.localStorage.getItem('userPassword') || '',
            headLike:"http://i1.lifevccdn.com/images/m/Account/mugshot_default@2x.png"
        }
    }
	componentDidMount(){
        this.props.changeSele();
        this.getBottomData();
        console.log(this.state);
    }
    getBottomData(){
        React.axios.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/contents/usercenter?si=lC5v9sXQoXgBMV1/nIxWta4L5ppi1pzaqS9JV082v8xEg4h7nY6MSTi2ixrCGZEbGlV1/7ZCdJM=&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
        .then((res)=>{
            if(res.statusText === 'OK'){
                this.setState({
                    bottomList:res.data.InnerData.CenterMenus
                })
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
                    <Link to='/setting/' className='userOptions'>设置</Link>
                </div>
                <div className="userStatus"
                    style={{
                        'display':this.state.ifLogin?'none':'flex'
                    }}
                >
                    <p className='noLogin'>您还未登录</p>
                    <div className="userBox">
                        <Link className='userLogin' to='/login/' onClick={this.props.changeToLog}>登录</Link>
                        <Link className='userReg' to='/login/' onClick={this.props.changeToReg}>注册</Link>
                    </div>
                </div>
                <div className="userDidLog"
                    style={{
                        'display':this.state.ifLogin?'flex':'none'
                    }}
                >
                    <div className="userBox">
                        <div className="headLike"><img  src= {this.state.headLike}/><input readOnly="readonly" type="file" accept="image/gif,image/jpeg,image/jpg,image/png" className="imgupload"/></div>
                        <div className="userMsg">
                            <p className='username'>{this.state.userId}</p>
                            <p className='userLevel'><span className='new'>新新会员</span><img src="http://i.lifevccdn.com/Images/m/UserCenter/i_index_uLevelNode100@3x.png" />
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="userOperate">
                    <ul>
                        <Link to={
                            this.state.ifLogin?'':'/login/'
                        }><span className='optBg optBg1'></span><span className='optWord'>待支付</span></Link>
                        <Link to={
                            this.state.ifLogin?'':'/login/'
                        }><span className='optBg optBg2'></span><span className='optWord'>待发货</span></Link>
                        <Link to={
                            this.state.ifLogin?'':'/login/'
                        }><span className='optBg optBg3'></span><span className='optWord'>待收货</span></Link>
                    </ul>
                    <ul>
                        <Link to={
                            this.state.ifLogin?'':'/login/'
                        }><span className='optBg optBg4'></span><span className='optWord'>待评论</span></Link>
                        <Link to={
                            this.state.ifLogin?'':'/login/'
                        }><span className='optBg optBg5'></span><span className='optWord'>回复</span></Link>
                        <Link to={
                            this.state.ifLogin?'':'/login/'
                        }><span className='optBg optBg6'></span><span className='optWord'>退换货</span></Link>
                    </ul>
                </div>
                <div className="userBottom">
                    {
                        this.state.bottomList.map((item,index)=>{
                            return <div className='btmBox' key={index}>
                                {
                                    item.Menus.map((itm,idx)=>{
                                        return <Link className='userList' key={idx} to={
                                            this.state.ifLogin?'':'/login/'
                                        }>
                                            <img src={this.state.rootPath + itm.Icon} alt=""/>
                                            <span className="itemTitle">
                                                {itm.Title}
                                            </span>
                                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        </Link>
                                    })
                                }
                            </div>
                        })
                    }
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
        },
        changeToReg() {
            dispatch({
                type: "changeToReg",
                status: 'register'
            })
        },
        changeToLog() {
            dispatch({
                type: "changeToLog",
                status: 'login'
            })
        }
    }
}))(User);
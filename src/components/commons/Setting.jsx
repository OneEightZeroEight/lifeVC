import React from 'react';
import { connect } from 'react-redux';
import '../../styles/setting.scss';
import {Link} from 'react-router-dom';
class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            ifLogin:window.localStorage.getItem('ifLogin') || false
        }
    }
    unLog(){
        this.props.changeUnLog();
        window.localStorage.removeItem('ifLogin');
        this.props.history.push('/footer/user/');
    }
    render() {
        return (
            <div className='setting'>
                 <div className="settingTop">
                 <Link to='/footer/user/'><i className="fa fa-angle-left" aria-hidden="true"></i></Link> 
                    <span className='settingCenter'>设置</span>
                    <span></span>
                </div>
                <div className="settingBox">
                    <div className="setbox">清理缓存<i className="fa fa-angle-right" aria-hidden="true"></i></div>
                    <div className="setbox">关于lifeVC<span>平台：browser 版本：5.1.2-261</span><i className="fa fa-angle-right" aria-hidden="true"></i></div>
                </div>
                <button className="logOut"
                    style={{
                        'display':this.state.ifLogin?'block':'none'
                    }}
                    onClick={this.unLog.bind(this)}
                >退出当前账号</button>
            </div>
        )
    }
}
export default connect((state) => {
    return state
}, (dispatch => {
    return {
        changeUnLog(){
            dispatch({
                type: "changeUnLog",
                ifLogin:false
            })
        }
    }
}))(Setting);
import React from 'react';
import '../../../styles/login.scss';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Toast } from 'antd-mobile';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            userId:'',
            userPassword :'',
            userIds:"",
            userPasswords:"",
            checkWord:''
        }
    }
    getId(e){
        this.setState({
            userId:e.target.value
        })
    }
    getPass(e){
        this.setState({
            userPassword:e.target.value
        })
    }
    getCheck(e){
        this.setState({
            checkWord:e.target.value
        })
    }
     getIds(e){
        this.setState({
            userIds:e.target.value
        })
    }
     getPasss(e){
        this.setState({
            userPasswords:e.target.value
        })
    }
    sendCheck(){
        React.axios.get("http://localhost:3001/Users/getCheck",{params:{us:this.state.userIds}})
        .then((res)=>{
            console.log(res);
            if(res.data.error == 0){
                Toast.success('验证码已发送！',2);
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    login(){
        if(this.state.userId == ''){
            Toast.fail('用户名不能为空', 1);
        }else if(this.state.userPassword == ''){
            Toast.fail('密码不能为空', 1);
        }else{
            React.axios.get("http://localhost:3001/Users/login",{params:{us:this.state.userId,ps:this.state.userPassword}})
            .then((res)=>{
                if(res.data.err == 0){
                    Toast.success('登录成功', 2,()=>{
                        Toast.loading('加载中', 1, () => {
                            window.localStorage.setItem('userId',this.state.userId);
                            window.localStorage.setItem('userPassword',this.state.userPassword);
                            window.localStorage.setItem('ifLogin',true);
                            this.props.history.push('/footer/user/');
                        });
                    });
                }else if(res.data.err == -1){
                    Toast.fail('用户名不存在', 1);
                }else{
                    Toast.fail('密码错误', 1);
                }
            })
            .catch((res)=>{
                console.log(res)
            })
        }
       
    }
    regist(){
        if(this.state.userIds == ''){
            Toast.fail('用户名不能为空', 1);
        }else if(this.state.userPasswords == ''){
            Toast.fail('密码不能为空', 1);
        }else if(this.state.checkWord == ''){
            Toast.fail('验证码错误', 1);
        }else{
            if(!/^\b1[3-8]\d{9}\b$/g.test(this.state.userIds)){ 
                Toast.fail('用户名不符合要求', 2);
            }else{
                if(!/^[a-z][\w\-]{5,19}$/i.test(this.state.userPasswords)){ 
                    Toast.fail('密码不符合要求', 2);
                }else{
                    React.axios.get("http://localhost:3001/Users/yz",{params:{us:this.state.userIds,checkWord:this.state.checkWord}})
                    .then((res)=>{
                        if(res.data.err == -1){
                            Toast.fail('用户名已被注册', 1);
                        }else if(res.data.err == -2){
                            Toast.fail('验证码错误', 1);
                        }else{
                            React.axios.get("http://localhost:3001/Users/reg",{params:{us:this.state.userIds,ps:this.state.userPasswords}})
                            .then((res)=>{
                                Toast.success('注册成功', 2,()=>{
                                    this.refs.checkWord.value = '';
                                    this.refs.pass.value = '';
                                    this.refs.userNum.value = '';
                                    this.props.changeToLog();
                                });
                            })
                            .catch((err)=>{
                                console.log(err)
                            })
                        }
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                }
            }
        }
    }
    // checkUser(){
    //     if(!/^\b1[3-8]\d{9}\b$/g.test(this.state.userIds)){ 
    //         Toast.fail('用户名不符合要求', 2);
    //     }else{
    //         if(!/^[a-z][\w\-]{5,19}$/i.test(this.state.userPasswords)){ 
    //             Toast.fail('密码不符合要求', 2);
    //         }else{
    //             React.axios.get('http://localhost:3001/User/yz',{params:{
    //                 us:this.state.userIds
    //             }})
    //             .then((res)=>{
    //                 if(res.data.err == -1){
    //                     Toast.fail('用户名已被注册', 1);
    //                 }
    //             })
    //             .catch((err)=>{
    //                 console.log(err);
    //             })
    //         }
    //     }
    // }
    render() {
        return (
            <div className='login'>
                <div className='loginTop'>
                    <Link to='/footer/user/' className="loginBack"> &lt; </Link>
                    <img data-v-4e187200="" src="data:image/png;base64,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" alt='' />
                    <span></span>
                </div>
                <div className="loginContainer">
                    <p className="oldLogin">
                        {
                            this.props.status == 'login' ? '老用户登录' : '新用户注册'
                        }
                    </p>
                    <div className="isLog"
                        style={{
                            'display':this.props.status == 'login'?'block':'none'
                        }}
                    >
                        <div className="logInbox">
                            <div className="phoneNum">

                                <input type="text" className="Num" placeholder='请输入手机号'  onChange={this.getId.bind(this)} />
                                <span className='getCheck'
                                    style={{
                                        'display': this.props.logType == 'password' ? 'none' : 'block',
                                    }}
                                >获取验证码</span>
                            </div>
                            <div className="logPassword">
                                <input type="password" className="password" placeholder={
                                    this.props.logType == 'password' ? '请输入登录密码' : '请输入手机验证码'

                                } onChange={this.getPass.bind(this)}/>

                                <span className='forgetPass'
                                    style={{
                                        'display': this.props.logType == 'password' ? 'block' : 'none',
                                    }}
                                >忘记密码</span>
                            </div>
                        </div>
                        <span className="toConnect"
                            style={{
                                'display': this.props.logType == 'password' ? 'none' : 'block',
                            }}
                        >遇到问题？请<a>联系客服</a></span>
                        <span className="phoneLog" onClick={
                            this.props.logType == 'password' ? this.props.changeToMobile.bind(this) : this.props.changeToPassword.bind(this)
                        }>{this.props.logType == 'password' ? '手机号快捷登录>' : '账号密码登录>'}</span>
                    </div>
                    <div className="isReg"
                        style={{
                            'display':this.props.status == 'login'?'none':'block'
                        }}
                    >
                        <div className="regbox"
                        >
                            <div className="phoneNum">

                                <input type="text" className="Num" placeholder='请输入手机号' onChange={this.getIds.bind(this)} ref='userNum'/>
                            </div>
                            <div className="regPassword">
                                <input type="password" className="password" placeholder='请输入6-20位密码，包含字母、数字或符号'  onChange={this.getPasss.bind(this)} ref='pass'/>
                            </div>
                            <div className="checkWord">
                                <input type="text" className="password" placeholder='请输入手机验证码' onChange={this.getCheck.bind(this)} ref='checkWord'/>
                                <span className='getCheck' onClick={this.sendCheck.bind(this)}>获取验证码</span>
                            </div>
                            <p className='agree'>
                            <input type="checkbox" defaultChecked/><span>阅读并同意《丽芙家居用户协议》和《隐私声明》</span>
                            </p>
                        </div>
                    </div>
                    <button className="toLog"
                        style={{
                            'border': this.props.status == 'login' ? '1px solid #3aad36' : '1px solid #8a8a8a',
                            'background':this.props.status == 'login' ?'#3aad36':'#8a8a8a'
                        }}
                        onClick={
                            this.props.status == 'register'?this.props.changeToLog.bind(this):this.login.bind(this)
                        }
                    >登录</button>
                    <button className="toReg"
                        style={{
                            'border': this.props.status == 'register' ? '1px solid #3aad36' : '1px solid #8a8a8a',
                            'background':this.props.status == 'register' ?'#3aad36':'#8a8a8a'
                        }}
                        onClick={
                            this.props.status == 'login'?this.props.changeToReg.bind(this):this.regist.bind(this)
                        }
                    >注册</button>
                    <span className="toConnectBottom"
                            style={{
                                'display': this.props.status == 'login' ? 'none' : 'block',
                            }}
                        >遇到问题？请<a>联系客服</a></span>
                </div>
            </div>
        )
    }
}
export default connect((state) => {
    return state
}, (dispatch => {
    return {
        changeToPassword() {
            dispatch({
                type: "changeToPassword",
                logType: 'password'
            })
        },
        changeToMobile() {
            dispatch({
                type: "changeToMobile",
                logType: 'mobilePhone'
            })
        },
        changeToLog() {
            dispatch({
                type: "changeToLog",
                status: 'login'
            })
        },
        changeToReg() {
            dispatch({
                type: "changeToReg",
                status: 'register'
            })
        },
        changeIfLog(){
            dispatch({
                type:'changeIfLog',
                ifLogin:true
            })
        }
    }
}))(Login);
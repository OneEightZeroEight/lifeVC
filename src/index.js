import React from 'react';
import ReactDOM from 'react-dom';
// 路由
import { HashRouter as Router} from "react-router-dom";
// 状态管理 配置store的
import { createStore } from 'redux'
// 把上面配置好的store和react进行关联
import { Provider } from 'react-redux';

import { Toast } from 'antd-mobile';
import '../node_modules/antd-mobile/dist/antd-mobile.css'

import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
React.axios = axios;

const store = createStore((state = {
    title:"lifeVC",
   	sele:0,
    sel:0,
    ifLearnShow:false,
    ifLogin:false,
    status:'login',
    logType:'password',
    goodsCount:0
}, action) => {
    switch (action.type) {
        case 'toggleNav':
            return {
                ...state,
                sel:action.sel
            }
        case 'toggleGallery':
            return {
                ...state,
                sele:action.sele
            }
        case 'changeLearn':
            return {
                ...state,
                ifLearnShow:action.ifLearnShow
            }
        case 'changeToPassword':
            return {
                ...state,
                logType:action.logType
            }
        case 'changeToMobile':
            return {
                ...state,
                logType:action.logType
            }
        case 'changeToLog':
            return {
                ...state,
                status:action.status
            }
        case 'changeToReg':
            return {
                ...state,
                status:action.status
            }
        case 'changeIfLog':
            return {
                ...state,
                ifLogin:action.ifLogin
            }
        case 'changeUnLog':
            return {
                ...state,
                ifLogin:action.ifLogin
            }
        case 'changegoodsCount':
            return {
                ...state,
                goodsCount:action.goodsCount
            }
        default:
            return state
    }
})
axios.interceptors.request.use((config) => {
  Toast.loading('加载中', 3,true);
    return config;
}, (err) => {
    return Promise.reject(err)

})
axios.interceptors.response.use((response) => {
    Toast.hide(); //关闭loading
    return response;
}, (err) => {
    return Promise.reject(err);

})

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

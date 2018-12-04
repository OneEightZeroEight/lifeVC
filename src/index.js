import React from 'react';
import ReactDOM from 'react-dom';
// 路由
import { HashRouter as Router} from "react-router-dom";
// 状态管理 配置store的
import { createStore } from 'redux'
// 把上面配置好的store和react进行关联
import { Provider } from 'react-redux';


import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
React.axios = axios;

const store = createStore((state = {
    title:"lifeVC",
   	sele:0

}, action) => {
    switch (action.type) {
        case 'toggleNav':
            return {
                ...state,
                isShowNav:action.isShowNav
            }
        case 'toggleGallery':
            return {
                ...state,
                sele:action.sele
            }
        default:
            return state
    }
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

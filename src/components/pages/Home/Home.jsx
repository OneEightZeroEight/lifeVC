    import React from 'react';
    import Header from './Header/Header';
    // import {Route} from 'react-router-dom';
    class Home extends React.Component{
        // componentDidMount(){
        //     this.getInfo();
        // }
        render(){
            return (
                <Header></Header>
            )
        }
        // getInfo(){
        //     React.axios.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/contents/home_v2?o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
        //     .then((res)=>{
        //         console.log(res);
        //     })
        //     .catch((err)=>{
        //         console.log(err);
        //     })
        // }
    }
    export default Home;
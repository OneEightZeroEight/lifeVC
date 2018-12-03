    import React from 'react';
    import Header from './Header/Header';
    import Index from './Index/Index';
    // import {Route} from 'react-router-dom';
    class Home extends React.Component{
        render(){
            return (
                <div className='home'>
                    <Header></Header>
                    <Index></Index>  
                </div>
            )
        }
    }
    export default Home;
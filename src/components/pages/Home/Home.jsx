
    import React from 'react';
    import Header from './Header/Header';
    import Index from './Index/Index';
    import NewArrive from './NewArrive/NewArrive';
    import Channel from './Channel/Channel';
    import {Route,Switch,Redirect} from 'react-router-dom';
    class Home extends React.Component{
        render(){
            return (
                <div className='home'>
                    <Header></Header>
                    <Switch>
                        
                        <Route path='/footer/home/index/' component={Index}/>
                        <Route path='/footer/home/newArrive/' component={NewArrive}/>
                        <Route path='/footer/home/channel/:pageId' component={Channel}/>
                        <Redirect from='/footer/home/' to='/footer/home/index/' />
                    </Switch>
                    
                </div>
            )
        }
    }
    export default Home;
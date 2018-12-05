
    import React from 'react';
    import Header from './Header/Header';
    import Index from './Index/Index';
    import NewArrive from './NewArrive/NewArrive';
    import Channel from './Channel/Channel';
    import {Route,Switch,Redirect} from 'react-router-dom';
    import {connect} from 'react-redux'
    class Home extends React.Component{
        componentDidMount(){
            window.sessionStorage.setItem('sele', 0);
        }
        render(){
            return (
                <div className='home'
                    style={{
                        'display':this.props.ifLearnShow?'none':'block'
                    }}
                >
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
    export default connect((state)=>{
        return state
    },(dispatch=>{
        return {
           
        }
    }))(Home);
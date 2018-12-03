import React from 'react';
import "../../../styles/GoFree.scss"
class Stroll extends React.Component{
constructor(props){
        super(props)
        this.state={
            title:"闲逛"
        }
    }
    render(){
        return (
            <div className='stroll'>
            <header id="topbar" className="header"><div  className="header-content"> 
            <p  className="header-title">{this.state.title}</p></div></header>
            </div>
        )
    }
}
export default Stroll;
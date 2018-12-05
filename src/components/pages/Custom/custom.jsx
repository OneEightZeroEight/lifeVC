import React from 'react';
import { connect } from 'react-redux';
class Custom extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
   
    }
    render(){
        return( 
        <div id="custom">  
             <i className="fa fa-chevron-left" aria-hidden="true"></i>
            <span className="titles">客户服务</span>
            </div>
        )
    }
   


    }
    export default Custom;
import React from 'react';
import { connect } from 'react-redux';
class User extends React.Component{
	constructor(props) {
        super(props);
        this.props = props;
        this.state = {
        }
    }
	componentDidMount(){
        this.props.changeSele();
    }
    render(){
        return (
            <div className='user'>
                <div className="userTop">
                    <span className='countCenter'>账户中心</span>
                    <span className='userOptions'>设置</span>
                </div>
            </div>
        )
    }
}
export default connect((state)=>{
    return state
},(dispatch=>{
    return {
        changeSele() {
            dispatch({
                type:"toggleGallery",
                sele:4
            })
        }
    }
}))(User);
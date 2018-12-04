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
            <div className='user'></div>
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
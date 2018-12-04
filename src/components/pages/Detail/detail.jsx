import React from 'react';
class Detail extends React.Component{
	constructor(props) {
        super(props);
        this.props = props;
        this.state = {
        }
    }
    componentDidMount(){
    	//获取传过来的id
    	let ItemInfoId = this.props.match.params.ItemInfoId
    	console.log(ItemInfoId)
        
    }
    render(){
        return (
            <div className='detail'>11</div>
        )
    }

}
export default Detail
import React from 'react';
import '../../../styles/product.scss';
import { Link } from 'react-router-dom';
class List extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            list:[],
            leiMing:false
        }
    }
    componentDidMount(){
    	//获取传过来的id
    	let itemindexid = this.props.match.params.ItemIndexId;
    	let filter = this.props.match.params.filter;

        React.axios.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/Categories/Category?itemindexid='+itemindexid+'&filter='+filter+'&sort=0&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
        .then((res)=>{
	        this.setState({
	            list: res.data.InnerData
	        });
            console.log(this.state.list,itemindexid,filter)
            
        })
        .catch((err)=>{
            console.log(err);
        })
        
    } 
    
    render(){
        return (
           <div>111</div>
        )
    }
}
export default List;
// http://app.lifevc.com/1.0/v_h5_5.1.2_33/Categories/Category?itemindexid=2861&filter=3552&sort=0&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true
// http://app.lifevc.com/1.0/v_h5_5.1.2_33/Categories/Category?itemindexid=2861&filter=3458&sort=0&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true
// http://app.lifevc.com/1.0/v_h5_5.1.2_33/Categories/Category?itemindexid=3526&filter=3530&sort=0&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true
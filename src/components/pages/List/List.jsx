import React from 'react';
import '../../../styles/list.scss';
import { Link } from 'react-router-dom';
class List extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            list:[],
            List:[],
            qieHuan:[
            	{name:'新品',sort:2},
            	{name:'畅销',sort:1},
            	{name:'价格',sort:3}
            ]
        }
    }
    componentDidMount(){

    	//获取传过来的id
    	let itemindexid = this.props.match.params.ItemIndexId;
    	let filter = this.props.match.params.filter;

        React.axios.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/Categories/Category?itemindexid='+itemindexid+'&filter='+filter+'&sort=0&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
        .then((res)=>{
	        this.setState({
	            list: res.data.InnerData.GoodsItems,
	            List:res.data.InnerData
	        });
            console.log(this.state.list,itemindexid,filter)
            
        })
        .catch((err)=>{
            console.log(err);
        })
        
    } 
    
    render(){
        return (
           <div>
           		<div className="Topp1">
           			<div className="TLeft">
           				<Link to="/footer/all/" >
           					<i className="fa fa-chevron-left" aria-hidden="true"></i>
           				</Link>
           			</div>
           			<div className="TRight">
           				{this.state.List.ItemIndexName}
           			</div>
           		</div>

           		<div>
           			<ul className="qieHuan">
           			{(()=>{
           				return this.state.qieHuan.map((item,index)=>{
           					return (
           						<li key={index}><a href="#">{item.name}</a></li>
           					)
           				})
           			})()}
           			</ul>
           		</div>

           		<div className="XunH">
           			{(()=>{
           				return this.state.list.map((item,index)=>{
           					return (
           						<div key={index} className="danDu">
           							<div className="Zp"><img src={"http://i.lifevccdn.com"+item.ImageUrl} alt={item.Name}/></div>
	           						<div className="PPP"><p>{item.Appeal}</p></div>
	           						<div className="PriCt">
	           							<div className="PriCt-Left">￥<span>{item.SalePrice}</span></div>
	           							<div className="PriCt-Right">评论：<span>{item.CommentCount}</span></div>
	           						</div>
           						</div>
           						
           					)
           				})
           			})()}
           		</div>
           		
           </div>
        )
    }
}
export default List;

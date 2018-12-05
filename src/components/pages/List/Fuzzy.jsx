import React from 'react';
import '../../../styles/list.scss';
import { Link } from 'react-router-dom';
class List extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            list:[],
            Llist:[],
            qieHuan:[
            	{name:'推荐',sort:1},
              {name:'新品',sort:2},
            	{name:'销量',sort:3},
            	{name:'价格',sort:4}
            ],
            sort:1,
            name:''
        }
    }
    componentDidMount(){
    	//获取传过来的id
    	let keywords = this.props.match.params.keywords;
      this.setState({
          name: keywords
      });
        React.axios.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/contents/search?keywords='+keywords+'&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
        .then((res)=>{
            this.setState({
                list:res.data.InnerData,
                Llist:res.data.InnerData
            });

            
        })
        .catch((err)=>{
            console.log(err);
        })
        
    }
    chongxin(xin){
      function compare(property){
          return function(a,b){
              var value1 = a[property];
              var value2 = b[property];
              return value1 - value2;
          }
      }
      let zhi;
      if(xin==1){
        zhi=this.state.Llist
      }else if(xin==2){
        zhi=this.state.list;//this.state.Llist跟着改变了,不知道什么原因
        zhi.sort(compare('ItemInfoId'))
      }else if(xin==3){
        zhi=this.state.list
        zhi.sort(compare('CommentCount'))
      }else if(xin==4){
        zhi=this.state.list
        zhi.sort(compare('SalePrice'))
      }
      console.log(this.state.Llist)
      this.setState({
          sort: xin,
          list:zhi
      });
    }
    
    render(){
        return (
           <div className="Llist">
           		<div className="Topp1">
           			<div className="TLeft">
           				<Link to="/footer/all/" >
           					<i className="fa fa-chevron-left" aria-hidden="true"></i>
           				</Link>
           			</div>
           			<div className="TRight">
           				{this.state.name}
           			</div>
           		</div>

              <div>
                <ul className="qieHuan">
                  {(()=>{
                    return this.state.qieHuan.map((item,index)=>{
                      return (
                        <li key={index} 
                        onClick={this.chongxin.bind(this,item.sort)}
                        className={this.state.sort===item.sort?"HeiHei":""} >
                          <span>{item.name}</span>
                        </li>
                      )
                    })
                  })()}
                  </ul>
                </div>

                <div className="KongKong"></div>
              <div className="XunH">
                {(()=>{
                  return this.state.list.map((item,index)=>{
                    return (
                      <Link key={index} className="danDu" to={'/detail/'+item.ItemInfoId} >
                      
                        <div className="Zp"><img src={"http://i.lifevccdn.com"+item.ImageUrl} alt={item.Name}/></div>
                        <div className="PPP"><p>{item.Name}</p></div>
                        <div className="PriCt">
                          <div className="PriCt-Left">￥<span>{item.SalePrice}</span></div>
                          <div className="PriCt-Right">评论：<span>{item.CommentCount}</span></div>
                        </div>
                      </Link>
                      
                    )
                  })
                })()}
              </div>

              <div className="KongKong"></div>
           		
           </div>
        )
    }
}
export default List;

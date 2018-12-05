import React from 'react';
import '../../../styles/list.scss';
import { Link } from 'react-router-dom';
class Fuzzy extends React.Component{
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
          let Bian = res.data.InnerData;
            this.setState({
                list:Bian,
                Llist:Bian
            });

            
        })
        .catch((err)=>{
            console.log(err);
        })
        
    }
    chongxin(xin){
      console.log(xin)
      function compare(property){
          return function(a,b){
              var value1 = a[property];
              var value2 = b[property];
              return value1 - value2;
          }
      }
      let zhi;
      if(xin==1){
        var Obj = {};
        Obj.name = this.state.Llist;
        var newObj = Object.assign({},JSON.parse(JSON.stringify(Obj)));
        zhi=newObj.name;
        //zhi=this.state.Llist错误。由于浅拷贝的原因，点击其它值时this.state.Llist
        // 跟着改变了,解决方法：赋值格式都改为深拷贝，但由于数据是数组格式，即要转为对象进行
        // 深拷贝，方法如上
      }else if(xin==2){
        var Obj = {};
        Obj.name = this.state.list;
        var newObj = Object.assign({},JSON.parse(JSON.stringify(Obj)));
        zhi=newObj.name;
        zhi.sort(compare('ItemInfoId'))
      }else if(xin==3){
        var Obj = {};
        Obj.name = this.state.list;
        var newObj = Object.assign({},JSON.parse(JSON.stringify(Obj)));
        zhi=newObj.name;
        zhi.sort(compare('CommentCount'))
      }else if(xin==4){
        var Obj = {};
        Obj.name = this.state.list;
        var newObj = Object.assign({},JSON.parse(JSON.stringify(Obj)));
        zhi=newObj.name;
        zhi.sort(compare('SalePrice'))
      }
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
export default Fuzzy;

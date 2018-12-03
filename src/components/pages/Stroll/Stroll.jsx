import React from 'react';
import "../../../styles/GoFree.scss"
import {Link} from 'react-router-dom';
class Stroll extends React.Component{
constructor(props){
        super(props)
        this.state={
            title:"闲逛",
            pageNo:0,
            lists:[]
// pageNo=1&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true
        }
    }
     componentDidMount(){
         React.axios.get("/life/1.0/v_h5_5.1.2_33/Stroll/StrollItemList",
          {params:{pageNo:this.state.pageNo+1,
          }}
         )
          .then((res)=>{
            console.log(res)
            let Res=res.data.InnerData.StrollList;
            console.log(Res)
            for(let i=0;i<Res.length;i++){
              if(Res[i].ImageUrl==null){
                Res.splice(i,1);
              }
            }
            
            this.setState({
                        lists:Res,
                        pageNo:res.data.InnerData.CurPage
                    });
          })
          .catch((err)=>{
            console.log(err);
        })
     }
    render(){
        return (
            <div className='stroll'>
            <header id="topbar" className="stop"><div  className="header-content"> 
            <p className="header-title">{this.state.title}</p></div></header>
            <ul className="list">
                {
                  this.state.lists.map((item,index)=>{
                    // 注意:拿到的图片需要进行字符串拼接才可以显示
                    return <li key={index}><img src={"http://i.lifevccdn.com"+item.ImageUrl} className="tp" alt=""/><p>{item.Name}</p><div className="desc"><span className="price">￥<em>{item.SalePrice}</em></span><span className="qty">月销<em>{item.SaleQty}</em></span></div></li>
                  })  
                }
            </ul>
            </div>
        )
    }
}
export default Stroll;
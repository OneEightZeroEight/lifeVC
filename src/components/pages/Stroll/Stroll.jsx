import React from 'react';
import "../../../styles/GoFree.scss"
class Stroll extends React.Component{
constructor(props){
        super(props)
        this.state={
            title:"闲逛",
            // pageNo:1,
            lists:[]

        }
    }
     componentDidMount(){
         React.axios.get("/jxapi/1.0/v_h5_5.1.2_33/Stroll/StrollItemList?pageNo=1&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true"
         )
          .then((res)=>{
            this.setState({
                        lists: res.InnerData.StrollList,
                        // pageNo:res.InnerData.CurPage
                    });
          })
          .catch((err)=>{
            console.log(err);
        })
     }
    render(){
        return (
            <div className='stroll'>
            <header id="topbar" className="header"><div  className="header-content"> 
            <p className="header-title">{this.state.title}</p></div></header>
            <ul className="list">
                {
                  this.state.lists.map((item,index)=>{
                    return <li key={index}>{item.Name}</li>
                  })  
                }
            </ul>
            </div>
        )
    }
}
export default Stroll;

import '../../../styles/GoFree.scss';
import React from 'react';
class  GoHeader extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:"闲逛"
        }
    }
    render(){
        return (
          <header id="topbar" className="header"><div  className="header-content"> 
          <p  className="header-title">{this.state.title}</p></div></header>
        )
    }
    // getInfo(){
    //     React.axios.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/contents/home_v2?o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
    //     .then((res)=>{
    //         console.log(res);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }
}
export default  GoHeader;
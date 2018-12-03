
import React from 'react';
import GoHeader from './goHeader.jsx';
class GoFree extends React.Component{
    // componentDidMount(){
    //     this.getInfo();
    // }
    render(){
        return (
            <GoHeader></GoHeader>
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
export default GoFree;
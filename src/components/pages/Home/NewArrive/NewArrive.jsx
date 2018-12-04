import React from 'react';
import { connect } from 'react-redux';
import '../../../../styles/newArrive.scss';
class NewArrive extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            weekList:[],
            monthList:[],
            showList:[],
            nowIndex:0,
            rootPath:'http://i.lifevccdn.com'
        }
    }
    componentDidMount(){
        this.getList();
        this.props.changeSel();
    }
    getList(){
        React.axios.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/contents/newarrival?code=weekly&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
        .then((res)=>{
            if(res.statusText === 'OK'){
                this.setState({
                    weekList:res.data.InnerData
                });
                console.log(this.state.weekList);
            }
        })
        .catch((err)=>{
            console.log(err);
        });
        React.axios.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/contents/newarrival?code=monthly&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
        .then((res)=>{
            if(res.statusText === 'OK'){
                this.setState({
                    allList:res.data.InnerData
                });
                this.getShowList();
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    getShowList(){
        let all = this.state.allList;
        let show = this.state.showList;
        if (all.length >= 3){
            for(let i = this.state.nowIndex;i<this.state.nowIndex + 3;i++){
                show.push(all[i]);
            }
            this.setState({
                showList:show,
                nowIndex:this.state.nowIndex + 3
            })
        }
        
    }
    render() {
        return(
            <div className='newArrive'>
                <p className='newTitle'>最近一周新品</p>
                {
                     this.state.weekList.map((item,index)=>{
                        return <div className='newArrMonth' key={index}>
                            <img src={this.state.rootPath + item.ImageUrl} alt=""/>
                            <p className="newName">{item.Name}</p>
                            <p className="newPrice">
                                <span className="left">￥{item.SalePrice}</span>
                                <span className="newIcon">{item.PriceTag}</span>
                                <span className="newComment">评论：  {item.CommentCount}</span>
                            </p>
                        </div>
                    })
                }
                <p className='newTitle'>最近一月新品</p>
                {
                    this.state.showList.map((item,index)=>{
                        return <div className='newArrMonth' key={index}>
                            <img src={this.state.rootPath + item.ImageUrl} alt=""/>
                            <p className="newName">{item.Name}</p>
                            <p className="newPrice">
                                <span className="left">￥{item.SalePrice}</span>
                                <span className="newIcon">新</span>
                                <span className="newComment">评论：  {item.CommentCount}</span>
                            </p>
                        </div>
                    })
                }
            </div>
        )
    }
}
export default connect((state)=>{
    return state
},(dispatch=>{
    return {
        changeSel() {
            dispatch({
                type:"toggleNav",
                sel:1
            })
        }
    }
}))(NewArrive);
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../../styles/newArrive.scss';
import { ListView } from 'antd-mobile';
class NewArrive extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            weekList:[],
            showList:[],
            nowIndex:0,
            isEnd:false,
            rootPath:'http://i.lifevccdn.com'
        }
    }
    componentDidMount(){
        this.getList();
        this.props.changeSel();
        window.onscroll = () => {
            if(!this.isEnd){
                if (window.scrollY >= this.refs.newArriveBox.clientHeight -800) {
                    this.getShowList();
                }
            }
        }
    }
    componentWillUnmount() {
        window.onscroll = () => {
            return
        }
    }
    getList(){
        React.axios.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/contents/newarrival?code=weekly&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
        .then((res)=>{
            if(res.statusText === 'OK'){
                this.setState({
                    weekList:res.data.InnerData
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        });
        React.axios.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/contents/newarrival?code=monthly&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
        .then((res)=>{
            if(res.statusText === 'OK'){
                this.setState({
                    allList:JSON.stringify(res.data.InnerData)
                });
                window.sessionStorage.setItem('monthList',this.state.allList);
                this.getShowList();
            }
            
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    getShowList(){
        let nowIndex = this.state.nowIndex;
        let newIndex = this.state.nowIndex + 3;
        let showList = this.state.showList;
        if(newIndex > JSON.parse(window.sessionStorage.getItem('monthList')).length){
            this.setState({
                isEnd:true
            })
        }
        this.setState({
            showList:showList.concat(JSON.parse(window.sessionStorage.getItem('monthList')).splice(nowIndex,3)),
            nowIndex:newIndex
        })
    }
    render() {
        return(
            <div className='newArrive' ref='newArriveBox'>
                <p className='newTitle'>最近一周新品</p>
                {
                     this.state.weekList.map((item,index)=>{
                        return <div className='newArrMonth' key={index}>
                        <Link to={'/detail/'+item.ItemInfoId} >
                            <img src={this.state.rootPath + item.ImageUrl} alt=""/>
                            <p className="newName">{item.Name}</p>
                            <p className="newPrice">
                                <span className="left">￥{item.SalePrice}</span>
                                <span className="newIcon">{item.PriceTag}</span>
                                <span className="newComment">评论：  {item.CommentCount}</span>
                            </p>
                        </Link>
                        </div>
                    })
                }
                <p className='newTitle'>最近一月新品</p>
                {
                    this.state.showList.map((item,index)=>{
                        return <div className='newArrMonth' key={index}>
                            <Link to={'/detail/'+item.ItemInfoId} >
                                <img src={this.state.rootPath + item.ImageUrl} alt=""/>
                                <p className="newName">{item.Name}</p>
                                <p className="newPrice">
                                    <span className="left">￥{item.SalePrice}</span>
                                    <span className="newIcon">新</span>
                                    <span className="newComment">评论：  {item.CommentCount}</span>
                                </p>
                            </Link>
                        </div>
                    })
                }
                {/* </InfiniteScroll> */}
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
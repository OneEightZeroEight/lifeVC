import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../../styles/channel.scss';
class Channel extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            chanTopList:[],
            mainPic:'',
            mainText:'',
            recoList:[],
            rootPath:'http://i.lifevccdn.com',
            pageId:'',
            showTop:false
        }
    }
    componentDidMount(){
        this.getchanList(this.props);
        window.onscroll = ()=>{
            if(window.scrollY >= 500){
                this.setState({
                    showTop:true
                })
            }else{
                this.setState({
                    showTop:false
                })
            }
        }
    }
    componentWillUnmount(){
        window.onscroll = ()=>{
            return
        }
    }
    componentWillReceiveProps(nextProps){
        this.getchanList(nextProps);
        let index = 3;
        if(nextProps.match.params.pageId==2860){
            index=2;
        }else if(nextProps.match.params.pageId==2859){
            index=3;
        }else if(nextProps.match.params.pageId==2861){
            index=4;
        }else if(nextProps.match.params.pageId==2865){
            index=5;
        }else if(nextProps.match.params.pageId==2862){
            index=6;
        }else if(nextProps.match.params.pageId==3526){
            index=7;
        }
        this.props.changeSel(index);
    }
    getchanList(nextProps){
        React.axios.get(`http://app.lifevc.com/1.0/v_h5_5.1.2_33/Categories/Category?itemIndexId=${nextProps.match.params.pageId}&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true`)
        .then((res)=>{
            if(res.statusText === 'OK'){
                this.setState({
                    chanTopList:res.data.InnerData.Categories,
                    mainPic:'http://i.lifevccdn.com' + res.data.InnerData.DesignerMessageImg,
                    mainText:res.data.InnerData.CEORecommendTitle.Text,
                    recoList:res.data.InnerData.CEORecommends,
                    pageId:nextProps.match.params.pageId
                });
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    backToTop(){
        window.scrollTo(0,0);
    }
    render() {
        return(
            <div className='channel'>
             <div className="toTop"
                    style={{
                        'display':this.state.showTop?'block':'none'
                    }} onClick={this.backToTop.bind(this)}
                >
                <i className="fa fa-chevron-up" aria-hidden="true"></i>
                </div>
                <div className="chanTop">
                    {
                        this.state.chanTopList.map((item,index)=>{
                            return <div className="chanTopBox" key={index}>
                            <Link to={'/list/'+this.state.pageId+'/'+item.ItemIndexId} >
                                <img src={'http://i.lifevccdn.com' + item.CategoryImageUrl} alt=""/>
                                <p>{item.Title}</p>
                            </Link>
                            </div>
                        })
                    }
                </div>
                <div className='chanCenter'>
                    <img src={this.state.mainPic} alt=""/>
                </div>
                <div className="chanBottom">
                    <p className='reco'>{this.state.mainText}</p> 
                    {
                        this.state.recoList.map((item,index)=>{
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
                </div>
            </div>
        )
    }
}
export default connect((state)=>{
    return state
},(dispatch=>{
    return {
        changeSel(index) {
            dispatch({
                type:"toggleNav",
                sel:index
            })
        }
    }
}))(Channel);
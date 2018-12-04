import React from 'react';
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
            rootPath:'http://i.lifevccdn.com'
        }
    }
    componentDidMount(){
        this.getchanList(this.props);
    }
    componentWillReceiveProps(nextProps){
        this.getchanList(nextProps);
    }
    getchanList(nextProps){
        React.axios.get(`http://app.lifevc.com/1.0/v_h5_5.1.2_33/Categories/Category?itemIndexId=${nextProps.match.params.pageId}&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true`)
        .then((res)=>{
            if(res.statusText === 'OK'){
                this.setState({
                    chanTopList:res.data.InnerData.Categories,
                    mainPic:'http://i.lifevccdn.com' + res.data.InnerData.DesignerMessageImg,
                    mainText:res.data.InnerData.CEORecommendTitle.Text,
                    recoList:res.data.InnerData.CEORecommends
                });
                console.log(this.state.chanTopList);
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
    render() {
        return(
            <div className='channel'>
                <div className="chanTop">
                    {
                        this.state.chanTopList.map((item,index)=>{
                            return <div className="chanTopBox" key={index}>
                                <img src={'http://i.lifevccdn.com' + item.CategoryImageUrl} alt=""/>
                                <p>{item.Title}</p>
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
                </div>
            </div>
        )
    }
}
export default Channel;
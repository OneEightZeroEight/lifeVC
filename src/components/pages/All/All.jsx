import React from 'react';
import { connect } from 'react-redux';
import '../../../styles/product.scss';
import { Link } from 'react-router-dom';
class Product extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            list:[],
            leiMing:false,
            sousuo:[],
            sszt:false,
            faSong:''
        }
    }
    componentDidMount(){
        React.axios.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/categories/allCategory?o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
        .then((res)=>{
            // console.log(res);
            // this.timer = setInterval(function () {
                // if(this.state.list.length>0){
                //     clearInterval(this.timer);
                    this.setState({
                        list: res.data.InnerData
                    });
                // }
            // }.bind(this), 100);
            // console.log(this.state.list)
            this.props.changeSele();
            
        })
        .catch((err)=>{
            console.log(err);
        })
        
    }
    changeEvent(e){
        React.axios.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/contents/SearchAutoSuggest?keywords='+e.target.value+'&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
        .then((res)=>{
            let dalao = res.data.InnerData.split(",");
            let dalao2 = [];
            for(let i=0;i<dalao.length;i++){
                let dalao1 = dalao[i].split("|");
                if(dalao1[0]!=''){
                    let hao = {}
                    hao.name = dalao1[0];
                    hao.qty = dalao1[1];
                    dalao2.push(hao);
                }
            }
            let zt;
            if(dalao2.length>0){
                zt = true;
            }else{
                zt = false;
            }
            this.setState({
                sousuo: dalao2,
                sszt:zt
            });
        })
        .catch((err)=>{
            console.log(err);
        })

    }
    toggleSou(){
        this.setState({
            leiMing: true
        });
    }
    toggleSou1(){
        this.setState({
            leiMing: false,
            sszt:false
        });
    }
    render(){
        return (
            <div>
                <div className="header1">
                    <p className="a">全部产品</p>
                </div>
                <div className="math1">
                    <input type="search" placeholder="搜索商品" className={this.state.leiMing?"searchinput changeStyle":"searchinput" } 
                     onClick={this.toggleSou.bind(this)} onChange={(e)=>this.changeEvent(e)} />
                    <input id="btnCancel" type="button" value="取消" className="sch-cancel" onClick={this.toggleSou1.bind(this)} />
                    <div className="FuDong">{
                            (()=>{
                                if(this.state.sszt){
                                    return <ul>
                                        {(() => {
                                            return this.state.sousuo.map((item, index) => {
                                                return <li key  = {index} >
                                                    <Link to={'/list/'+item.name} >
                                                        <span>{item.name}</span><span>约{item.qty}条</span> 
                                                    </Link>
                                                </li>
                                            })

                                        })()}
                                    </ul>
                                }
                            })()
                        }</div>
                </div>
                <div className="wuYong"></div>
                <div className="xunHuan1">
                    {(() => {
                        return this.state.list.map((item, index) => {
                            return (
                                <div key={index}>
                                	<div className="NAME">{item.Name}</div>
                                	<ul>
                                		{(() => {
                    						return item.Children.map((item1, index1) => {
                                				return <li key={index1}>
	                                						<Link className="LINK" to={'/list/'+item.ItemIndexId+'/'+item1.ItemIndexId} >
	                                							<div className="Img1"><img src={"http://i.lifevccdn.com"+item1.Icon} alt={item1.Name}/></div>
	                                							<div className="Name1">{item1.Name}</div>
	                                						</Link>
                                						</li>
                                			})
                                		})()}
                                	</ul>
                                </div>
                            )
                        })

                    })()}
                </div>
            </div>
        )
    }
    // http://i.lifevccdn.com/upload/AppIndexIcon/8214c5e1af0b4bf2ae09d46d3c1e610e.jpg
    //                      "/upload/AppIndexIcon/8214c5e1af0b4bf2ae09d46d3c1e610e.jpg"
}
export default connect((state)=>{
    return state
},(dispatch=>{
    return {
        changeSele() {
            dispatch({
                type:"toggleGallery",
                sele:1
            })
        }
    }
}))(Product);
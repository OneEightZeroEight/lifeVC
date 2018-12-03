import React from 'react';
import '../../../styles/product.scss';
class Product extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            list:[],
            leiMing:false
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
            console.log(this.state.list)
            
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
            leiMing: false
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
                     onClick={this.toggleSou.bind(this)} />
                    <input id="btnCancel" type="button" value="取消" className="sch-cancel" onClick={this.toggleSou1.bind(this)} />
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
                                							<div className="Img1"><img src={"http://i.lifevccdn.com"+item1.Icon} alt={item1.Name}/></div>
                                							<div className="Name1">{item1.Name}</div>
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
export default Product;
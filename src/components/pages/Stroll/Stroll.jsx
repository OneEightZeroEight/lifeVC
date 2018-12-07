import React from 'react';
import "../../../styles/GoFree.scss"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Stroll extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "闲逛",
            pageNo: 0,
            lists: [],
            pageCount: 0,
            ifLoad: true
        }
    }
    getStroList() {
        let page = this.state.pageNo;
        this.setState({
            ifLoad: false
        })
        React.axios.get("/life/1.0/v_h5_5.1.2_33/Stroll/StrollItemList",
            {
                params: {
                    pageNo: this.state.pageNo + 1,
                }
            }
        )
            .then((res) => {
                let Res = res.data.InnerData.StrollList;
                let list = this.state.lists;
                for (let i = 0; i < Res.length; i++) {
                    if (Res[i].ImageUrl == null) {
                        Res.splice(i, 1);
                    }
                }
                this.setState({
                    lists: list.concat(Res),
                    pageNo: res.data.InnerData.CurPage,
                    pageCount: res.data.InnerData.PageCount,
                    ifLoad: true
                });
                // if(page < this.state.pageNo){
                //     this.setState({

                //     })
                // }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    componentWillUnmount() {
        window.onscroll = () => {
            return
        }
    }
    componentDidMount() {
        this.getStroList();
        this.props.changeSele();
        window.onscroll = () => {
            if (this.state.pageNo <= this.state.pageCount) {
                // this.setState({
                //     ifLoad:true
                // });
                let page = this.state.pageNo;
                if (window.scrollY >= this.refs.list.clientHeight - 650) {
                    if (this.state.ifLoad) {
                        this.getStroList();
                    }
                }
            }
        }
    }
    render() {
        return (
            <div className='stroll'>
                <header id="topbar" className="stop"><div className="header-content">
                    <p className="header-title">{this.state.title}</p></div></header>
                <ul className="list" ref='list'>
                    {
                        this.state.lists.map((item, index) => {
                            // 注意:拿到的图片需要进行字符串拼接才可以显示
                            return (<li key={index}>
                                <Link to={'/detail/' + item.ItemInfoID}>
                                    <img src={"http://i.lifevccdn.com" + item.ImageUrl} className="tp" alt="" /><p className='name'>{item.Name}</p>
                                    {
                                        (() => {
                                            if (item.ActivityPrice != 0) {
                                                return <p><span className="price">￥{item.ActivityPrice}</span><span style={{
                                                    'color': '#333',
                                                    'textDecoration': 'line-through'
                                                }}>￥{item.SalePrice}</span><span className="qty">月销{item.SaleQty}
                                                    </span></p>
                                            } else {
                                                return <p><span className="price">￥{item.SalePrice}</span><span className="qty">月销{item.SaleQty}
                                                </span></p>
                                            }
                                        })()
                                    }
                                </Link>
                            </li>)

                        })
                    }
                </ul>
            </div>
        )
    }
}
export default connect((state) => {
    return state
}, (dispatch => {
    return {
        changeSele() {
            dispatch({
                type: "toggleGallery",
                sele: 2
            })
        }
    }
}))(Stroll);
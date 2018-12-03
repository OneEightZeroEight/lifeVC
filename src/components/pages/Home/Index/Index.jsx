import React from 'react';
import Swiper from 'swiper';
import '../../../../styles/index.scss';
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            rootPath:'http://i.lifevccdn.com',
            bannerList: [],
            otherList:[]
        }
    }
    componentDidMount() {
        this.getMainData();
    }
    componentDidUpdate() {
        var bannerSwiper = new Swiper('#banner', {
            pagination: {
                el: '.swiper-pagination'
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction:false
            },
            loop: true,
        })
    }
    getMainData() {
        React.axios.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/contents/home_v2?o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
            .then((res) => {
                if (res.statusText === 'OK') {
                    let banner = [];
                    let picList = res.data.InnerData[0].InnerData;
                    for (let i = 0; i < picList.length; i++) {
                        let picUrl = this.state.rootPath + picList[i].ImageUrl;
                        banner.push(picUrl);
                    }
                    let others = res.data.InnerData.slice(1);
                    for(let i = 0;i<others.length;i++){
                        others[i].InnerData.ImageUrl = this.state.rootPath + others[i].InnerData.ImageUrl;
                    }
                    this.setState({ 
                        bannerList: banner,
                        otherList:others
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        return (
            <div className='index'>
                <div className="banner">
                    <div className="swiper-container" id='banner'>
                        <div className="swiper-wrapper">
                            {
                                this.state.bannerList.map((item, index) => {
                                    return <div className='swiper-slide' key={index}><img src={item} alt="" /></div>
                                })
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                {
                    this.state.otherList.map((item,index)=>{
                        return<div className='others'  key={index}>
                            <img src={item.InnerData.ImageUrl} alt="" style={{
                                width:'100%'
                            }} useMap={'#planetmap' + index + 1}/>
                            <map name={'planetmap' + index + 1} id={'planetmap' + index + 1}>
                                {
                                    item.InnerData.TouchElem.map((itm,idx)=>{
                                        return <area key={idx} shape='rect' alt='' coords={
                                            Math.floor((itm.BeginXP/100)*item.InnerData.ImageWidth/2) + ',' + Math.floor((itm.BeginYP/100)*item.InnerData.ImageHeight/2) + ',' + Math.floor((itm.EndXP/100)*item.InnerData.ImageWidth/2) + ',' + Math.floor((itm.EndYP/100)*item.InnerData.ImageHeight/2)
                                        } href={itm.Uri}></area>
                                    })
                                }
                            </map>
                        </div>
                    })
                }
            </div>
        )
    }
}
export default Index;
import React from 'react';
import Swiper from 'swiper';
import '../../../../../node_modules/swiper/dist/css/swiper.min.css';
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            bannerList: []
        }
    }
    componentDidMount() {
        this.getBannerList();
    }
    getBannerList() {
        React.axios.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/contents/home_v2?o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
            .then((res) => {
                if (res.statusText === 'OK') {
                    let banner = [];
                    let picList = res.data.InnerData[0].InnerData;
                    for (let i = 0; i < picList.length; i++) {
                        let picUrl = 'http://i.lifevccdn.com/' + picList[i].ImageUrl;
                        banner.push(picUrl);
                    }
                    this.setState({bannerList:banner});
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
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                this.state.bannerList.map((item, index) => {
                                    return <div className='siwper-slide' key={index}><img src={item} alt="" /></div>
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Index;
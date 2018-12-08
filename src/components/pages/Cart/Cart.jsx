import React from 'react';
import { connect } from 'react-redux';
import "../../../styles/car.scss"
import '../../../static/css/font-awesome.css';
import Swiper from 'swiper';
import {Link} from 'react-router-dom';
class Cart extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            sszt:true,//有没有登录
            sooping:true,//有没有商品
            xiugai:true,//点击修改
            zhuangTai:true,//全选选框状态
            jiage:0,//商品价格
            qty:0,//商品数量
            xiangPing:[],//商品
            Bbottom:[{ActivityPrice: 0 ,ActivityTag: null, Appeal: "擦完就扔，油污不脏手",Code: "829592160",CommentCount: 3794 ,CountdownTag: null ,CountdownTime: 0, ImageUrl: "/upload/goods/D1802011449449456_d230x230.jpg",IsEmpty: false ,IsPotter: false ,ItemInfoId: 27442 ,MaskImageUrl: null, Name: "厨房油污清洁湿巾(30片装)",PriceTag: "",PriceTags: null ,SalePrice: 10 ,SortIndex: null, Uri: "inner:///item/27442"},
                    {ActivityPrice: 0 ,ActivityTag: null, Appeal: "双重清洁配方，除菌除味去黄渍",Code: "872748680",CommentCount: 2901 ,CountdownTag: null ,CountdownTime: 0, ImageUrl: "/upload/goods/D1806291544022668_d230x230.jpg",IsEmpty: false ,IsPotter: false ,ItemInfoId: 27204 ,MaskImageUrl: null, Name: "双色除菌除臭洁厕剂（5粒装）",PriceTag: "",PriceTags: null ,SalePrice: 15 ,SortIndex: null, Uri: "inner:///item/27204"},
                    {ActivityPrice: 0 ,ActivityTag: null, Appeal: "温和清洁，滋养头皮",Code: "838776970",CommentCount: 9552 ,CountdownTag: null ,CountdownTime: 0, ImageUrl: "/upload/goods/D1712221341265132_d230x230.jpg",IsEmpty: false ,IsPotter: false ,ItemInfoId: 27544 ,MaskImageUrl: null, Name: "氨基酸无硅油洗发水/护发素",PriceTag: "",PriceTags: null ,SalePrice: 49 ,SortIndex: null, Uri: "inner:///item/27544"},
                    {ActivityPrice: 0 ,ActivityTag: null, Appeal: "让你的衣柜瞬间变大1/2",Code: "801213733",CommentCount: 27075, CountdownTag: null ,CountdownTime: 0, ImageUrl: "/upload/goods/D1709111527344118_d230x230.jpg",IsEmpty: false ,IsPotter: false ,ItemInfoId: 25501 ,MaskImageUrl: null, Name: "抽真空防潮收纳袋(中-2只装)",PriceTag: "",PriceTags: null ,SalePrice: 15 ,SortIndex: null, Uri: "inner:///item/25501"},
                    {ActivityPrice: 0 ,ActivityTag: null, Appeal: "给你一个爱的抱抱",Code: "881290013",CommentCount: 354, CountdownTag: null ,CountdownTime: 0, ImageUrl: "/upload/goods/D1809141910458126_d230x230.jpg",IsEmpty: false ,IsPotter: false ,ItemInfoId: 30073 ,MaskImageUrl: null, Name: "舒柔卡通抱枕",PriceTag: "",PriceTags: null ,SalePrice: 69 ,SortIndex: null, Uri: "inner:///item/30073"},
                    {ActivityPrice: 0 ,ActivityTag: null, Appeal: "含日本进口保湿因子",Code: "856203700",CommentCount: 3058 ,CountdownTag: null ,CountdownTime: 0, ImageUrl: "/upload/goods/D1801091817575460_d230x230.jpg",IsEmpty: false ,IsPotter: false ,ItemInfoId: 25611 ,MaskImageUrl: null, Name: "轻奢超柔抽纸(含保湿因子)",PriceTag: "",PriceTags: null ,SalePrice: 19 ,SortIndex: null, Uri: "inner:///item/25611"},
                    {ActivityPrice: 0 ,ActivityTag: null, Appeal: "进口竹炭软刷毛，洁齿护龈更健康",Code: "825177531",CommentCount: 4146 ,CountdownTag: null ,CountdownTime: 0, ImageUrl: "/upload/goods/D1709291536099584_d230x230.jpg",IsEmpty: false ,IsPotter: false ,ItemInfoId: 23992 ,MaskImageUrl: null, Name: "竹炭超细软毛牙刷",PriceTag: "",PriceTags: null ,SalePrice: 9 ,SortIndex: null, Uri: "inner:///item/23992"},
                    {ActivityPrice: 0 ,ActivityTag: null, Appeal: "牙齿不够白？试试酵素牙膏吧",Code: "866997430",CommentCount: 6416 ,CountdownTag: null ,CountdownTime: 0, ImageUrl: "/upload/goods/D1712292008232144_d230x230.jpg",IsEmpty: false ,IsPotter: false ,ItemInfoId: 26847 ,MaskImageUrl: null, Name: "酵素洁齿牙膏",PriceTag: "",PriceTags: null ,SalePrice: 19 ,SortIndex: null, Uri: "inner:///item/26847"},
                    {ActivityPrice: 0 ,ActivityTag: null, Appeal: "用过添加氨基酸的沐浴露吗？",Code: "878021090",CommentCount: 3275 ,CountdownTag: null ,CountdownTime: 0, ImageUrl: "/upload/goods/D1712190959351339_d230x230.jpg",IsEmpty: false ,IsPotter: false ,ItemInfoId: 28002 ,MaskImageUrl: null, Name: "氨基酸沐浴露(润泽保湿)",PriceTag: "",PriceTags: null ,SalePrice: 49 ,SortIndex: null, Uri: "inner:///item/28002"},
                    {ActivityPrice: 0 ,ActivityTag: null, Appeal: "可降解，一起来保护环境",Code: "892726590",CommentCount: 21318, CountdownTag: null ,CountdownTime: 0, ImageUrl: "/upload/goods/D1612292034178130_d230x230.gif",IsEmpty: false ,IsPotter: false ,ItemInfoId: 19640 ,MaskImageUrl: null, Name: "可降解环保垃圾袋(自动收口式)",PriceTag: "",PriceTags: null ,SalePrice: 9 ,SortIndex: null, Uri: "inner:///item/19640"},
                    {ActivityPrice: 0 ,ActivityTag: null, Appeal: "刷完后舔一下，牙齿变滑了",Code: "817346171",CommentCount: 4381 ,CountdownTag: null ,CountdownTime: 0, ImageUrl: "/upload/goods/D1708251714357038_d230x230.jpg",IsEmpty: false ,IsPotter: false ,ItemInfoId: 25399 ,MaskImageUrl: null, Name: "超声波电动牙刷刷头替换装(2个)",PriceTag: "",PriceTags: null ,SalePrice: 29 ,SortIndex: null, Uri: "inner:///item/25399"},
                    {ActivityPrice: 0 ,ActivityTag: null, Appeal: "冬天，PP不再冷冰冰",Code: "858529131",CommentCount: 472, CountdownTag: null ,CountdownTime: 0, ImageUrl: "/upload/goods/D1809071705532416_d230x230.jpg",IsEmpty: false ,IsPotter: false ,ItemInfoId: 29935 ,MaskImageUrl: null, Name: "法兰绒加厚卫生马桶垫",PriceTag: "",PriceTags: null ,SalePrice: 19 ,SortIndex: null, Uri: "inner:///item/29935"},
                    {ActivityPrice: 0 ,ActivityTag: null, Appeal: "蒸馒头，不会粘",Code: "2412413697",CommentCount: 33964, CountdownTag: null ,CountdownTime: 0, ImageUrl: "/upload/goods/D1507221016189640_d230x230.jpg",IsEmpty: false ,IsPotter: false ,ItemInfoId: 15518 ,MaskImageUrl: null, Name: "蒸笼无纺布(30片装)",PriceTag: "",PriceTags: null ,SalePrice: 10 ,SortIndex: null, Uri: "inner:///item/15518"},
                    {ActivityPrice: 0 ,ActivityTag: null, Appeal: "可降解，一起来保护环境",Code: "827127320",CommentCount: 26010, CountdownTag: null ,CountdownTime: 0, ImageUrl: "/upload/goods/D1704141723322525_d230x230.jpg",IsEmpty: false ,IsPotter: false ,ItemInfoId: 22170 ,MaskImageUrl: null, Name: "可降解环保垃圾袋(可拎式)",PriceTag: "",PriceTags: null ,SalePrice: 9 ,SortIndex: null, Uri: "inner:///item/22170"}

                    ],//没有登录时底部商品信息
            guangGao:{}// 登录后半折抢购信息
        }
    }
    haoshu(){
        this.panduan();
        this.panduan1();
        this.panduan2();
    }
    componentDidMount(){
        if(window.localStorage.getItem('userId')){
            let haooo= JSON.parse(window.localStorage.getItem('detailCarts'));
            let xiangPing =[];
            if(haooo != null){
                for(let i=0;i<haooo.length;i++){
                    if(haooo[i].yhm==window.localStorage.getItem('userId')){
                        xiangPing.push(haooo[i]);
                    }
                }
            }
            let sszt=false;
            this.setState(
                Object.assign({}, { xiangPing }),
                () => this.haoshu()//同步
            )
            this.setState(
                Object.assign({}, { sszt })
            )
        }else{
            let sszt=true;
            this.setState(
                Object.assign({}, { sszt }),
                () => this.haoshu()//同步
            )
        }
        


        this.props.changeSele();
        //     window.localStorage.setItem('CarDiBu',JSON.stringify(res.data.RecommendItems));

        // if(JSON.parse(window.localStorage.getItem('CarDiBu'))){
        //     let Bbottom = JSON.parse(window.localStorage.getItem('CarDiBu'));
        //     //要把数据变成JSON字符串保持内容，要不然获取到的数据为[object] [object]

            
        //     this.setState(
        //         Object.assign({}, { Bbottom })
        //     )
        // }
        React.axios.get('http://marketing.lifevc.com/v1/getCart?si=qsSTiCma24QNrqm%2F79krpdZ0mpRbm96Kk%2BA6DNvjV0dM52vH6%2BlALMJGNPJRqqbkZaK3iA2i0hQ%3D&ck=71f002fe_224109620&regionId=15247&pm=8&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
        .then((res)=>{
            let guangGao = res.data.Prompts[0];
            this.setState({
                guangGao:guangGao
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    componentDidUpdate(){
          // <!-- Initialize Swiper -->
        var swiper2 = new Swiper('#center', {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
    xiuGai(){
        this.setState({
            xiugai:!this.state.xiugai
        })
    }
    //点击减
    jian(index){
        let dalao;
        if(this.state.xiangPing[index].nums>1){
            dalao = this.state.xiangPing;
            dalao[index].nums=dalao[index].nums-1;
            this.setState({
                xiangPing:dalao
            })
        }
        window.localStorage.setItem('detailCarts',JSON.stringify(this.state.xiangPing));
        this.panduan1();
         React.axios.get("http://localhost:3001/goods/goodsAdd",{params:{name:dalao[index].name,yhm:dalao[index].yhm,ext:"jian"}})
        .then((res)=>{})
    }
    //点击加
    jia(index){
        let dalao = this.state.xiangPing;
        dalao[index].nums=dalao[index].nums+1;
        this.setState({
            xiangPing:dalao
        })
        window.localStorage.setItem('detailCarts',JSON.stringify(this.state.xiangPing));
        this.panduan1();
        React.axios.get("http://localhost:3001/goods/goodsAdd",{params:{name:dalao[index].name,yhm:dalao[index].yhm,ext:"jia"}})
        .then((res)=>{})
    }
    //删除
    danshan(index){
        let dalao = this.state.xiangPing;
        dalao.splice(index,1);
        this.setState({
            xiangPing:dalao
        })
        window.localStorage.setItem('detailCarts',JSON.stringify(this.state.xiangPing));
        this.panduan();
        this.panduan1();
        this.panduan2();
        React.axios.get("http://localhost:3001/goods/goodsDell",{params:{name:dalao[index].name,yhm:dalao[index].yhm}})
        .then((res)=>{})
    }
    //批量删除
    pilianshan(){
        let dalao = this.state.xiangPing;
        for(let i=0;i<this.state.xiangPing.length;i++){
            if(this.state.xiangPing[i].status){
                dalao.splice(i,1);
                this.pilianshan();//递归删除
            }
        }
        this.setState({
            xiangPing:dalao
        })
        window.localStorage.setItem('detailCarts',JSON.stringify(this.state.xiangPing));
        this.panduan();
        this.panduan1();
        this.panduan2();
    }
    //全选
    quanXuan(){
        let Zt = [];
        for(let i=0;i<this.state.xiangPing.length;i++){
            if(this.state.xiangPing[i].status){
                Zt.push(this.state.xiangPing[i].status)
            }
        }
        if(this.state.xiangPing.length==Zt.length){
            let dalao = this.state.xiangPing;
            for(let i=0;i<this.state.xiangPing.length;i++){
                dalao[i].status=false;
            }
            this.setState({
                xiangPing:dalao,
                zhuangTai:false
            })
        }else if(this.state.xiangPing.length!=Zt.length){
            let dalao = this.state.xiangPing;
            for(let i=0;i<this.state.xiangPing.length;i++){
                dalao[i].status=true;
            }
            this.setState({
                xiangPing:dalao,
                zhuangTai:true
            })
        }
        this.panduan1();
    }
    //点击选中框
    danxuan(index){
        let dalao = this.state.xiangPing;
        dalao[index].status=!this.state.xiangPing[index].status;
        this.setState({
            xiangPing:dalao,
            zhuangTai:true
        })
        this.panduan();
        this.panduan1();
    }
    //判断是否已经全部选中
    panduan(){
        let Zt = [];
        for(let i=0;i<this.state.xiangPing.length;i++){
            if(this.state.xiangPing[i].status){
                Zt.push(this.state.xiangPing[i].status)
            }
        }
        if(this.state.xiangPing.length==Zt.length){
            this.setState({
                zhuangTai:true
            })
        }else if(this.state.xiangPing.length!=Zt.length){
            this.setState({
                zhuangTai:false
            })
        }
    }
    //商品价格，数量
    panduan1(){
        let qian=0;
        let shu =0;
        for(let i=0;i<this.state.xiangPing.length;i++){
            if(this.state.xiangPing[i].status){
                qian+=(this.state.xiangPing[i].nums-0)*(this.state.xiangPing[i].price-0);
                shu+=this.state.xiangPing[i].nums-0;
            }
        }
        this.setState({
            jiage:qian,
            qty:shu
        })
        this.props.changegoodsCount(shu);
    }
    //判断是否有商品
    panduan2(){
        if(!window.localStorage.getItem('userId')){
            let sooping=false;
            this.setState(
                Object.assign({}, { sooping })
            )
        }
        if(this.state.xiangPing.length==0){
            let sooping=false;
            this.setState(
                Object.assign({}, { sooping })
            )
        }
    }
    back(){
        this.props.history.go(-1);
    }
    render(){
        return (
            <div className='cart'>
                <div className="Top">
                    <span onClick={this.back.bind(this)}><i className="fa fa-chevron-left" aria-hidden="true"></i></span>
                    <p className="header-title">购物车</p>
                    <div>{
                        (()=>{
                            if(this.state.sooping){
                                return <div className="header-right" onClick={this.xiuGai.bind(this)}>
                                    <div className="i">
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </div>

                                    <div>{
                                        (()=>{
                                            if(this.state.xiugai){
                                                return <div>
                                                    <div className="p">修改</div>
                                                </div>
                                            }
                                        })()
                                    }</div>
                                    <div>{
                                        (()=>{
                                            if(!this.state.xiugai){
                                                return <div>
                                                    <div className="p">完成</div>
                                                </div>
                                            }
                                        })()
                                    }</div>
                                    

                                </div>
                            }
                        })()
                    }</div>
                </div>

                <div>{
                    (()=>{
                        if(this.state.sszt){
                            return <div  className="login-wrap">
                                        <div className="login"><Link to="/footer/user/" className="logins">登录</Link>
                                            <span className="tips">你可以在登录后同步电脑与手机购物车中的商品</span>
                                        </div>
                                    </div>
                        }
                    })()
                }</div>
                <div>{
                    (()=>{
                        if(!this.state.sszt){
                            return <div  className="login-Kon">
                                    </div>
                        }
                    })()
                }</div>
                
                <div className="change">
                  <input type="text" maxLength="15" placeholder="礼品兑换处，请输入兑换码" className="ipts"/>
                  <input type="button" value="兑换" className="exch-btn"/>
                </div>
                <div>{
                    (()=>{
                        if(!this.state.sooping){
                            return <div>
                                <div className="carts-img">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzRDMkZFMUZEQzVCMTFFNjkyNTRBMTMwNjdBRDU3NEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzRDMkZFMjBEQzVCMTFFNjkyNTRBMTMwNjdBRDU3NEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNEEyMkVFMURDNUIxMUU2OTI1NEExMzA2N0FENTc0QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNEEyMkVFMkRDNUIxMUU2OTI1NEExMzA2N0FENTc0QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt3GYJ4AAAyUSURBVHja7J1Ni1TLGcdrVJyLuTIDXlRMwA4G3SgjZHkDdlbJbsx2NrafIO0nyAjZBjqf4Lab2aaHuw45A8naGQRBjWQGRaNE0o1eBY1M6pmpvsyd291Tdd6qTtXvD4f2pV/OeU796nmeeqrqzO3u7iqE0GTNAQhCAIIQgCAEIAgBCEIAghCAIAQgCAEIQgCCEAIQhAAEIQBBCEAQAhCEAAQlrLW1ta5+uRnAqWzro7+yspIBCAoBjEX9Io1xKbBTu60h6c96wzFuH6pBgwDhEH2j4W0DCPLpPa7rlxsBn2IXQJBPtQM/v2UAQT7VafLJAwiqOjlfCvw0dwAE+dLNBpxjH0AQ+cdkba2srKwCCMKD/FAjfdzVcFw/6o0UClFV+Yd4j79Zvv2OPjZrOrWhBsP6t05wK5Fn7zHSDbYX6kUQYiHf+ccg5IsAEFRFeNVS9sO7GYAgwis8CELO4ZUMsw4BBKWm5Ri8B4CgKvKPaMIrAEE+w6sdl3oEgKDUEvSsCRcDIKjM8EqmblyMJbwCEOQrvMKDIMKrGVoPfXgXQFDZ4ZUsjrJde5415boABNXtPRqTfwAI8pF/yPDuNoAgPEjDvQeAoLLyDxneXQAQhIp5j5HNfrgAglIFJGvahQEIKhpetZT94qgBgKDU1HZ4Lx4EEV5N0VaThncBBNXtQQZNvDgAQUXyD/EeCwCCUDHvMWrC4igAQb7yj0FTL/DEES5UZmh2VfibEKP69YWKbHGUEyBm+kDmEGMiNE1ZU098VojVBw5UgjaasjjKGhDtPToq/CcDoWZo0OSTn+ZBWtxXBCCMYqFqtdPE6rkNIEPuLUrde8wCZMC9RSUoa/oFTH0Em07UN0nUURHp8GouVg8SBf3Iq9ZjuIhZlfS+Pn5v+T13ASoJfamPb1PJP2YCIpPLdJglj8u1KRYuNm2tMXKXqY8lk38cFWK59AI3aT5JKOrFUVUCctHM3UJxq52S97ABxOVC8SJxh1dtZT83r58EIGaS2TqAIOW299VmEoA4epElswUMShuQqIrMx0q+4DbtKMrwSjo+28VRWVKAmNGILcIsvAcepPhFL9OWopRtZNDoxVF1AOL6nGzUDC2X3U6iAsSMSuwQZiWZf7jczyxJQBwvnkQ9zfxjJ6bh3TyAUFUn/0jKezgBonsHl/iyQ7uKIrySji76va/K8iAi26o6YVZa3sO1A40WEFsjUFWPQ7aRwHqsBnAFxCXOZDSr2eGVbDu7VEG7iBcQx6o6YVazlWz1vIgHEfUt37dseiEUd/4RzeKosgDJKjAyaq4HyWI2gjMgVNWTyD+kY4v6yVFVehAXowBI3N5jFPtmHXkBsTXKgumNUJz5Rxa7IXIBYopCI7xIlOFVS9kP7w4ApHjvASBxeg8AKck4F6mqR5l/bMW2OMoXIHiRZinZxVGlAmJ6jw0AiSr/oHpeogdxMdINqupR5R9RLo7yCQheJK78I0vFIIUAMXNwbKvqbdpf0OFV8oujqvAgLsbCg8QRXuFBKgJkgS2Bogiv1lMY3i0NEDMXx7aqTpgVZnglAyg38B7VeBDCrLTCqwGAuMu2V2FLoGaHVzsxL44KwYMQZjUbkEFqhikFEMcH7XRoj0HlH+LRbRdHZQBSfZi1RFW9kd5jFOveV3UBQlU9bkCyFI1TGiA8aKeR4VVLsTiqNg/i0suQqIehdgX3FkBmqG/5PqrqzQqvtlIb3q0EEDMFmrXq8XmQQaoGOlbBdw5KvjmomvxDOij2vgoYEKrqzfAeo1QWR9UFiEsyR5gVfv4xSNlIpQPiWFUHED/hVUuxOMqbB3ExKg/aCdt7uEYEAFKBUUnWw80/NlJaHFUbIFTVgw6vZB4ce1959iAuxl2m2QbpPZIPr0IBRFFVDzL/2El5eLdyQHjQTuM9yABTVetBXFw0gNSTf7jsfZVhseoBcdkSiKp6OOGVSnFx1CTN7e7uVt1r2f6AhGPb3JJK9Ut9fGnxPtn7Cq+udaKG35Cqus1I1UUH94/C8PyEWBg7SZF/AAiaomQXR3kBxExV2MLUeA8Ama4+pm6MuFceAKFXaoZGVM89AGKMvoG5gxf5oicPIuoq+w0dEPlHWoAYLyLV8nXMjgdpiiqvpE/T2tpaG/PXoj/q42uL98nwLtN9QgEE1dYR2d7gOxqQHhbzl4Og+uFg7TmAoBlicRSAoBmyzfPwHgCSXHjlsjiK0SsAwXtME4ujAIT8Y7qoSwFIcuGV7H11g/wDQFAx70H+ASDkHzO0w+IoAMGD4D0ABH2ff8jwLk+OAhA0RR3L98niKBJ0ACH/mCLgAJDkwquWflkivAIQVMx7AAiAJCnb0aut1J8cBSBpiidHAQiakn9QPa9A3pfcmsSybQ758+Fx/Hf6+J/a3xFF/vyfBO6L7MD+lT5+ovY3GF889P9DY5PvjD3eGdvZTG+X6nmLpm+nEx7B6Kj9rYCWLBqLmtBIUtbYFl8p9x3xM8wXMCAGjJ6yr/aickV4FSIgJpTqK/tp2Kga4UFCy0FMAtnHa3jXhs4/2pjBXsdqgENCqr8AB+EVgEyG4xvMDCCEWD+GQ4Zr72PiYMTwbiiAmDXRshEZD+UMS79minsYIdYqcASpPibw7EHMcO6/8oQAar8+Ip5nW9ZKm+/6nT5+o49fqf3Ksovk2YjdAOwsuditHJ/7hz7+ro9/6+Ofar9i/gtz/FbZT20/qNvatoDiEZC+Y2OQKSTdo26aCdt6ORqa97BCn7tMDVlwBLtz1H655hESPUdQyEV8AWIa8X8dG8JNl501coyM3dPf3/EIR+Xnm6NTwot4ykFcZpRKSNV23XbG3NjbDh+5ZcD1pZtVw2w+c6+icwIQT42hk3fRjoHkzw4faXu08bJDh1EkX+qa7yjznACk5O+zbYj3SsgLVpX9Q0G9AOL4mLlukVV+5rOrFZ0bgJTQGFoOiWjhR32ZBmFbGfb17D3b390pY4d141lHgdskWQ/SsnxfmQ+rH5R8bmVrseTrKPO7WF/jIcSy0aaH7/JVtLTtpcvcQGE78E4DQOpSAzZeXiwZdBtlAAIg47wnljChzOsg+W44IGU2htATTVvP4KM3z2j+9QJiG0cvmRGvOgHZ8GRfW5uUWbijCBgiII4jU52Sftb2e3zlKrY2KaXTcNybl+eiewixbHvqbtH8waxzD70xuPxur4Tf61V0bgBSc1wrBcV+weTc5fNelpqaUbYty7cvm4mNeW0in7WdQrLFo9f8AOLSEJfNLNQ8cGTKvmrvuzG42KRnliq72uS6o/dgbboPQEwe4pIQy0zbvm24ZRpCptzWP/Q929jl9wX6+/o6uw5wyHvvK7f1Jn2avp2qWDAlrt51J5OR6QF7kybsGTCkIdzK8b0t31v951ivMc7n+tPWbZgcTGziuhGf1/UxyQNibl6m8u+gKDH7wQbdUvmnitzRjaHn28gFliFPG/xweVDnYf2c/MM/ICFs+SO5RzCFRG2TVf3yB8+ncVfbZJVm7xkQ3w1ibm7uuwsXLnTPnz//sxlvW1RulfginmxPDx8+VB8+fPByo+fn599dvXr1r2r28O5w2v9fuXIlA5AwYu/CarVa6syZM8EZ+/Pnz+rBgwd7r3Xq+PHj6tq1a3uvJetw6LetfliUPfj3oYZsE0C0Hj16JL1tS/eWP33y5MmfPn36dC51OMZ6//69evz4cW2QCBSXL19Wp06dCskMowOe6iBEWWjeqhAgGoTrJkwRINombFk63Gs+e/ZMvXnzJnk4DkLy9OlT9fHjx0p/5+TJk+rSpUuhweHqocYACTSbGp5h0IBoKASEjtqfFGc9kvLixQv18uXLyhqCwHH69OnG3HnpOASSt2/fVvL9YguBo4KwyrdklFMKnb06YHECxHiM3KNT0nM+f/681EZx9uxZpRPyxjYE8aziYcsKucQOYg+xS+Ta0IC0QwNEQqiuORaKNIpXr14VGtGRUEoagniPpkvgEHu8fv06NygChkBx7ty5GL3GpNBrtY5cJXcOYrxJ2+Qg11WOfWLFowgs4lGOgkVuuoQNcggcsTaC4XC4d4hNjspRpHMQeywuLu4dkWqc0Gfj1zrzkFJHscajVwaYRfPn1qTkfZKmhV7z8/NReIo8nkU6kUmSxDuSTuLgiNbYI8jfhyGMZtX+nPQDEKkDACn148KdFVQo2Ma+5xAP/f37Bt+UwmPtgBSEa1JSNvZWtv8+VqpP25XtSbdn/P+mmrxUeNK/b+uGvh2zsRoFiEcwj4LNt6JvqACCEIAgBCAIAQhCAIIQgAAIQgCCUA79X4ABAKdJdlgseocZAAAAAElFTkSuQmCC" alt="购物车" />
                                    <p>你的购物车还是空荡荡的</p>
                                    <div className="carts-link">
                                        <Link to="/footer/home/index/">
                                            <input type="button" value="赶紧去逛逛" className="carts-guan"></input>
                                        </Link>
                                    </div>
                                </div>

                                <div className="cart-bottom">
                                    <div className="cart-assem-title">
                                        <p>Rico.S为你精心推荐</p>
                                    </div>

                                    <div className="swiper-container carts" id="center">
                                         <div className="swiper-wrapper">
                                            {
                                                 this.state.Bbottom.map((item,index)=>{
                                                    return <div className="swiper-slide" key={index} >
                                                        <Link to={'/detail/'+item.ItemInfoId} >
                                                            <img src={'http://i.lifevc.com'+item.ImageUrl}/>
                                                            <p>{item.Name}</p>
                                                            <p>￥<span>{item.SalePrice}</span></p>
                                                        </Link>
                                                    </div>
                                                 })
                                            }

                                        </div>
                                    </div>

                                </div>

                            </div>
                        }
                    })()
                }</div>

                


                <div>{
                    (()=>{
                        if(this.state.sooping){
                            return <div className="cars-main">
                                <div className="cars-Ggao">
                                    <a href={this.state.guangGao.Url}>
                                        <span>{this.state.guangGao.Tag}</span>
                                        {this.state.guangGao.Text}
                                    </a>
                                </div>

                                <div className="Sping">{(() => {
                                    return this.state.xiangPing.map((item, index) => {
                                        return <div className="xSping" key={index}>
                                                    <div className="ip">
                                                        <input type="checkbox" checked={item.status} onClick={this.danxuan.bind(this,index)} />
                                                    </div> 
                                                    <Link className="ig" to={'/detail/'+item.goodId} >
                                                        <img src={item.goodPic} />
                                                    </Link>


                                                    {
                                                        (()=>{
                                                            if(this.state.xiugai){
                                                                return <div className="Mag">
                                                                    
                                                                    <p>
                                                                        <Link className="Mag-a" to={'/detail/'+item.goodId} >{item.name}</Link>
                                                                        <span>￥{item.price}</span>
                                                                    </p>
                                                                    <p><span></span><span>x {item.nums}</span></p>
                                                                </div>
                                                            }
                                                        })()
                                                    }

                                                    {
                                                        (()=>{
                                                            if(!this.state.xiugai){
                                                                return <div className="Mag"><p>
                                                                        <div className="iii" onClick={this.danshan.bind(this,index)}>
                                                                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                                        </div></p>
                                                                    <p>
                                                                        <div className="quantity-editor">
                                                                            <span className="tag-act-wrap"></span>
                                                                            <span className="decrement" onClick={this.jian.bind(this,index)} >-</span>
                                                                            <span type="text" className="quantity-num">{item.nums}</span>
                                                                            <span className="increment" onClick={this.jia.bind(this,index)}>+</span>
                                                                        </div>
                                                                    </p>
                                                                </div>
                                                            }
                                                        })()
                                                    }


                                                </div>
                                    })

                                })()}

                                    
                                </div>




                                <div className="carts-sping-di">
                                    <span>送至：</span>
                                    <select className="form-control">
                                        <option value="1">上海</option>
                                        <option value="2">广州</option>
                                    </select>&nbsp;&nbsp;&nbsp;
                                    <span>新会员首单，满69元免运费</span>
                                </div>


                                <div className="carts-quanxuan">
                                    <div className="ip">
                                        <input type="checkbox" checked={this.state.zhuangTai} onClick={this.quanXuan.bind(this)} />
                                    </div>
                                    <div className="carts-quanX">
                                        <span>全选</span>
                                    </div>
                                    <div className="carts-Price">
                                        <p>合计：￥<span>{this.state.jiage}</span></p>
                                        <p className="catr-teS">商品：￥<span>{this.state.jiage}</span>&nbsp;- 优惠：￥<span>0</span></p>
                                    </div>

                                    {(()=>{
                                        if(this.state.xiugai){
                                            return <div className="carts-kuang1">
                                            <Link to="/Accont" >
                                                去结算 (<span>{this.state.qty}</span>)
                                            </Link> 
                                            </div>
                                        }
                                    })()}
                                    {(()=>{
                                        if(!this.state.xiugai){
                                            return <div className="carts-kuang2" onClick={this.pilianshan.bind(this)}>删除</div>
                                        }
                                    })()}
                                </div>


                            </div>
                        }
                    })()
                }</div>
            </div>
        )
    }
}
export default connect((state)=>{
    return state
},(dispatch=>{
    return {
        changeSele() {
            dispatch({
                type:"toggleGallery",
                sele:3
            })
        },
        changegoodsCount(counts){
            dispatch({
                type:"changegoodsCount",
                goodsCount:counts
            })
        }
    }
}))(Cart);
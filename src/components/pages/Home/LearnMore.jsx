import React from 'react';
import '../../../styles/learnMore.scss';
import {connect} from 'react-redux';
class LearnMore extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            nowClass:''
        }
    }
    render() {
        return (
            <div className='learnMore'
                style={{
                    'display':this.props.ifLearnShow?'block':'none'
                }}
            >
                <div className="learnTop">
                    <i className="fa fa-chevron-left" aria-hidden="true" onClick={this.props.changeLearn.bind(this)}></i>
                    <span className='learnVC'>了解LifeVC</span>
                    <span></span>
                </div>
                <div className="learnContainer">
                    <section className="sect">
                        <h3>0.3%</h3>
                        <h4>我们质量瑕疵退货率：0.3%</h4>
                        <div className="cont">
                            <p>我们的委托生产供应商，给欧美客户的外贸家居订单，产品质量瑕疵率标准，通常在1.5%左右，但我们对委托生产商的质量要求，是0.5%！而在过去一年的时间里，我们的产品，因为质量瑕疵的退货率，低至0.3% —— 即每售出100件商品，只有0.3件产品，会因为质量瑕疵而退货。我们像捍卫我们生命一样，在捍卫我们的产品质量。</p>
                        </div>
                    </section>
                    <section className="sect">
                        <h3>99.5%</h3>
                        <h4>我们客服满意率：99.5%</h4>
                        <div className="cont">
                            <p>如果你拨打我们的服务热线，在通话结束时，我们都会邀请你“对本次服务打分，满意请按1，不满意请按0”。放心，这个电话评分不是摆设，如果你按了0，第二天，我们客户服务中心的高级经理，就会亲自打电话给你，向你致歉，为你解决问题。</p>
                            <p>正是因为日复一日、年复一年的自我纠错，我们目前的客服电话评分满意率，已经达到了99.5%—— 每100个来电，只有0.5个消费者，对我们的服务表示不满意，这令我们非常自豪，当然我们还需要继续努力。</p>
                        </div>
                    </section>
                    <section className="sect">
                        <h3>第1个</h3>
                        <h4>每一件产品，我都是第一个试用者。</h4>
                        <div className="cont">
                            <p>真的， 每一件新产品，我都是第一个试用者，当然，除了我以外，我们还有一个产品体验官部门，她们专门负责新品试用工作。“这件产品，我会用么？我会买么？我会满意么？”这三个问题，是我问的最多的问题。每一件新产品，我们既是设计者，也必须是第一个使用者，只有通过亲身试用，我们才能发现产品还不够完美的地方，并持续改进。对消费者负责，总归是对的！</p>
                        </div>
                    </section>
                    <section className="sect">
                        <h3>4级质检</h3>
                        <h4>我们努力确保每一件产品0瑕疵</h4>
                        <div className="cont">
                            <p>每天，我们将近100人的质量团队，会对正在销售的产品，进行4轮严格的质量检查：原材料质检、生产GB/QB质检、产品入库全检，以及包裹出库AQZ质检，努力确保你拿到的每件产品，都没有任何瑕疵。在中国，我们把大部分的精力，都投在了产品研发和质量控制中，因为我们相信，好产品，就是最好的广告。</p>
                        </div>
                    </section>
                    <section className="sect">
                        <h3>8小时</h3>
                        <h4>8小时快速退款</h4>
                        <div className="cont">
                            <p>我也经常会在网上购物，我有着和你一样的想法：退货省心么？所以在中国，我们推出了“8小时退款”承诺：如果你对收到的产品不满意，只需一个电话：4006092288，超便捷快速退货，包裹退仓后，8小时之内快速退款。</p>
                        </div>
                    </section>

                    <section className="sect">
                        <h3>15天</h3>
                        <h4>15天促销差价补偿</h4>
                        <div className="cont">
                            <p>错过促销，总让人觉得不开心。所以，我们还推出了15天促销保护服务：在你今天下单起的15天内，如果你购买的产品降价促销，你只需去“个人账户-促销差价补偿”版块，即可自助获得促销差价补偿，这个服务很受大家的欢迎。</p>
                        </div>
                    </section>

                    <section className="sect">
                        <h3>30天</h3>
                        <h4>30天无理由退换货</h4>
                        <div className="cont">
                            <p>是的，国家《消法》规定是7天无理由退换货，但为什么就不能给用户，更长一点思考时间呢？所以，我们把无理由退换货时间，定在了30天：自你包裹签收之日起30天内，你都可以无理由退换货。我们始终相信，只要产品过硬、用户满意，7天还是30天无理由退货期，没什么区别。</p>
                        </div>
                    </section>
                    <section className="sect sect2">
                        <h3>品牌及价值观：</h3>
                        <h4>对消费者好，总归是对的</h4>
                        <div className="cont">
                            <p>“做一个有品质、有气质，受人喜欢、受人尊敬的品牌”，这在LifeVC，是最核心的价值观。</p>
                            <p>珍惜品牌声誉，倾听每一个消费者的声音，包括她们的赞誉和抱怨，用心为她们设计、生产最优质的产品，并提供真诚的服务。在LifeVC，我们常常要求员工假设：如果是自己的家人在购买产品，该如何工作？
                            <img src="http://i4.lifevccdn.com/Images/m/Service/ser_lifevcDesigners.jpg" alt=''/></p>
                        </div>
                    </section>
                    <section className="sect sect2">
                        <h3>产品：</h3>
                        <h4>我们力求使用最好的材料</h4>
                        <div className="cont">
                            <p>我曾经问我们的产品经理：我们的沙发，消费者会只用四五年就扔掉么？我们的不锈钢保温壶，消费者会只用一两年就扔掉么？我们的拖把，消费者会只用半年就扔掉么？不会！</p>
                            <p>所以我们必须力求使用最好的材料，用最好的钢材、用最好的棉纱、用最好的陶瓷、用最好的电路板、用最好的元器件……的确，会耗工时、会费成本，但我们坚信，消费者是识货的。</p>
                        </div>
                    </section>
                    <section className="sect sect2">
                        <h3>销售：</h3>
                        <h4>在中国，LifeVC 仅在官方网站销售</h4>
                        <div className="cont">
                            <p>采用网络销售，可以让我们降低成本，以更低的价格，让大家买到更高品质的产品，而为了确保品牌形象、服务质量始终如一，在中国，LifeVC仅在官方网站进行销售。</p>
                        </div>
                    </section>
                    <section className="sect sect2 sect-end">
                        <h3>服务：</h3>
                        <h4>如果你有不满意<br/>那一定是我们做得还不够好</h4>
                            <div className="cont">
                                <p>在售后服务上，我们始终秉承一个原则：如果我是消费者，我希望得到什么样的服务？</p>
                                <p>所以在中国，我们陆续推出了：30天无理由退货、8小时快速退款承诺、15天促销差价补偿、质量瑕疵退换货无时限，等一系列受人欢迎的售后服务措施。在中国，我们已累计服务了1千万会员，努力让每一个会员都满意，这是你的信任所赋予我们的责任。</p>
                                <p>感谢你今天光顾LifeVC。</p>
                            </div>
                    </section>
                    <div className="signature">
                        <p><img src="http://i1.lifevccdn.com/Images/m/signature_trans@2x.png" alt=''/></p>
                        <p>LifeVC丽芙家居（中国）CEO：Rico.S</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect((state)=>{
    return state
},(dispatch=>{
    return {
        changeLearn() {
            dispatch({
                type:"changeLearn",
                ifLearnShow:!this.props.ifLearnShow
            })
        }
    }
}))(LearnMore);
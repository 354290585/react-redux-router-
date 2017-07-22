import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactSwipe from 'react-swipe'
import './style.less'
import { Link } from 'react-router'
class CateGory extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
        this.state = {
            index: 0,
            categoryName:''
        }
    }
    render() {
        var options = {
            auto:2000,
            startSlide: 0,
            speed: 1000,
            callback: function (index) {
               this.setState({index: index});
            }.bind(this)
        }
        return (
            <div className="banner" ref='content' onClick={this.liHandle.bind(this)}>
                <ReactSwipe className="carousel" swipeOptions={options}>
                    <div className="carousel-item">
                        <ul className="clearfixe" >
                            <Link to="/search/meishi"><li className="float-left">
                                <i className="iconfont icon-meishi"></i><br/>美食</li></Link>
                             <Link to="/search/dianying"><li className="float-left">
                                <i className="iconfont icon-dianying"></i><br/>电影</li></Link>
                             <Link to="/search/jiudian"><li className="float-left">
                                <i className="iconfont icon-jiudian"></i><br/>酒店</li></Link>
                             <Link to="/search/xiuxian"><li className="float-left">
                                <i className="iconfont icon-kafei"></i><br/>休闲娱乐</li></Link>
                             <Link to="/search/waimai"><li className="float-left">
                                <i className="iconfont icon-icon-yxj-takeout"></i><br/>外卖</li></Link>
                             <Link to="/search/huoguo"><li className="float-left">
                                <i className="iconfont icon-huoguo"></i><br/>火锅</li></Link>
                             <Link to="/search/liren"><li className="float-left">
                                <i className="iconfont icon-liren"></i><br/>丽人</li></Link>
                             <Link to="/search/dujia"><li className="float-left">
                                <i className="iconfont icon-dujia"></i><br/>度假出行</li></Link>
                             <Link to="/search/zuliao"><li className="float-left">
                                <i className="iconfont icon-zuliao-copy"></i><br/>足疗按摩</li></Link>
                             <Link to="/search/zhoubianyou"><li className="float-left">
                                <i className="iconfont icon-zhoubianyou"></i><br/>周边游</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clearfixe">
                             <Link to="/search/jingdian"><li className="float-left">
                                <i className="iconfont icon-jingdian"></i><br/>景点</li></Link>
                             <Link to="/search/ktv"><li className="float-left">
                                <i className="iconfont icon-ktv"></i><br/>KTV</li></Link>
                             <Link to="/search/gouwu"><li className="float-left">
                                <i className="iconfont icon-gouwu"></i><br/>购物</li></Link>
                             <Link to="/search/shenghuo"><li className="float-left">
                                <i className="iconfont icon-shenghuofuwu"></i><br/>生活</li></Link>
                             <Link to="/search/jianshen"><li className="float-left">
                                <i className="iconfont icon-jianshen"></i><br/>健身</li></Link>
                             <Link to="/search/meifa"><li className="float-left">
                                <i className="iconfont icon-meifa"></i><br/>美发</li></Link>
                             <Link to="/search/qinzi"><li className="float-left">
                                <i className="iconfont icon-qinzi"></i><br/>亲子</li></Link>
                             <Link to="/search/xiaochi"><li className="float-left">
                                <i className="iconfont icon-kuaican"></i><br/>小吃</li></Link>
                             <Link to="/search/zizhu"><li className="float-left">
                                <i className="iconfont icon-zizhucan"></i><br/>自助</li></Link>
                             <Link to="/search/jiuba"><li className="float-left">
                                <i className="iconfont icon-jiuba14"></i><br/>酒吧</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clearfixe">
                             <Link to="/search/ribencai"><li className="float-left">
                                <i className="iconfont icon-wanfan"></i><br/>日本菜</li></Link>
                             <Link to="/search/spa"><li className="float-left">
                                <i className="iconfont icon-anmoshi"></i><br/>SPA</li></Link>
                             <Link to="/search/jiehun"><li className="float-left">
                                <i className="iconfont icon-jiehun"></i><br/>结婚</li></Link>
                             <Link to="/search/xuexi"><li className="float-left">
                                <i className="iconfont icon-xuexi3"></i><br/>学习培训</li></Link>
                             <Link to="/search/xican"><li className="float-left">
                                <i className="iconfont icon-xican"></i><br/>西餐</li></Link>
                            <Link to="/search/huoche"><li className="float-left">
                                <i className="iconfont icon-feijipiao"></i><br/>火车机票</li></Link>
                             <Link to="/search/shaokao"><li className="float-left">
                                <i className="iconfont icon-shaokao"></i><br/>烧烤</li></Link>
                             <Link to="/search/jiazhuang"><li className="float-left">
                                <i className="iconfont icon-zhuangxiu"></i><br/>家装</li></Link>
                             <Link to="/search/chongwu"><li className="float-left">
                                <i className="iconfont icon-pet"></i><br/>宠物</li></Link>
                             <Link to="/search/quanbu"><li className="float-left">
                                <i className="iconfont icon-tubiaozhizuomoban"></i><br/>全部分类</li></Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="nav-index">
                    <ul>
                        <li
                            className={this.state.index === 0
                            ? "select"
                            : ""}></li>
                        <li
                            className={this.state.index === 1
                            ? "select"
                            : ""}></li>
                        <li
                            className={this.state.index === 2
                            ? "select"
                            : ""}></li>
                    </ul>
                </div>
            </div>
        );
     
    }  
    liHandle(ev){
        const content = this.refs.content;
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
　　　　 if(target.nodeName.toLowerCase() == 'i'){
           var categoryName =  target.parentNode.innerText
           this.setState({
                categoryName:categoryName
           }); 
           this.props.categoryActions.category({categoryName:categoryName});
　　　　 }
　　　　 if(target.nodeName.toLowerCase() == 'li'){
           var categoryName =  target.innerText
　　　　    this.setState({
                categoryName:categoryName
           })
          this.props.categoryActions.category({categoryName:categoryName});
　　　　 }
       
    }
}

export default CateGory;
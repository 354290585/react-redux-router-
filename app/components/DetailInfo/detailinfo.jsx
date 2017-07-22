import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less'
import Star from '../Star/star'
var img = require ('../../static//images/base.js')
class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }   
    render() {
        const data = this.props.data;
        return (
            <div className="detailinfo-container clearfixe">
                <div className="info">
                    <img className="float-left" src={img.base1} alt="商户图片"/>
                    <div className="info-describe float-right">
                        <h4>天下第一锅</h4>
                        <Star starNum={data.star}/> &nbsp; 
                        <span>{data.commentNum}条</span>
                        &nbsp;&nbsp;<span>￥{data.price}/人</span>
                        <p>{data.subTitle}<span className="shoucang"><i className={this.props.isStore ?  'iconfont icon-star1 red' : 'iconfont icon-star1'} onClick={this.storeHandle.bind(this)} ></i>{this.props.isStore ? '已收藏' : '收藏'}</span></p>
                        <p>口味&nbsp;:&nbsp;{data.comment.a} 环境&nbsp;:&nbsp;{data.comment.b} 服务&nbsp;:&nbsp;{data.comment.c}</p>
                        <button className="buy" onClick={this.buyClickHandle.bind(this)}>购买</button>
                    </div>
                    <ul className="address-tel">
                        <li><i className="iconfont icon-ditu left"></i>&nbsp;&nbsp;{data.address}<i className="iconfont icon-xiayibu2 float-right right"></i></li>
                        <li><i className="iconfont icon-dianhua left"></i>&nbsp;&nbsp;{data.tel}<i className="iconfont icon-xiayibu2    float-right right"></i></li>
                    </ul>
                </div>
            </div>
        );
    }
    buyClickHandle() {
        const buyHandle = this.props.buyHandle
        buyHandle();
    }
    storeHandle(){
         const storeHandle = this.props.storeHandle();
         storeHandle;
    }
}

export default Header;
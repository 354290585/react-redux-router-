import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less'
var img = require('../../static/images/base.js')
class OrderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
        this.state={
            commentState:''
        }
    }
    render() {
        const data = this.props.data;
        return (
            <div className="order-container ">
                {data.map((item, index) => {
                    return <div className="info " key={index}>
                                <div className="top clearfixe">
                                    <img className="left float-left" src={img.base1} alt="商户图片"/>
                                    <div className="centenr float-right clearfixe">
                                        <h4>{item.title} ( 杏石口路店)
                                        </h4> <p >{item.state
                                            ? '订单已完成'
                                            : '订单已退货'}</p>
                                        <i className="iconfont icon-xiayibu2"></i>
                                        <span>{item.data}</span> 
                                        
                                    </div>
                                </div>
                                <div className="detail">
                                    <span>{item.info.slice(0,1)}等{item.count}商品</span>
                                    <span className="price float-right">￥{item.price}</span>
                                </div>
                                <div className="button clearfixe">
                                     {
                                        item.commentState === 0
                                        // 未评价
                                        ? <button className="comment">评价</button>
                                        :
                                            item.commentState === 1
                                            // 评价中
                                            ? ''
                                            // 已经评价
                                            : <button className="comment">已评价</button>
                                    }
                                   
                                </div>
                        </div>
                })}
            </div>
        );
    }
}

export default OrderList;
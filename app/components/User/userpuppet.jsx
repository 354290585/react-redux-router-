import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less'
import {Link} from 'react-router'
import OrderList from '../OrderList/orderlist'
class UserPuppet extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }
    render() {
        return (
            <div className="container">
                <div
                    className="tabs clearfixe"
                    ref="tabs"
                    onClick={this
                    .tabsHandle
                    .bind(this)}>
                    <div className="tab  ac float-left">
                        全部订单
                    </div>
                    <div className="tab float-left">
                        待付款
                    </div>
                    <div className="tab float-left">
                        退款售后
                    </div>
                    <div className="tab float-left">
                        优惠券
                    </div>
                </div>

                <div ref="lists" className="list-contaniner">
                    <ul className="list show">
                        {this.props.data
                            ? <OrderList data={this.props.data}/>
                            : <div className="list-info">
                                    <div className="icon">
                                        <i className="iconfont icon-dingdan"></i>
                                    </div>
                                    <p className="list-title">您还没有相关订单</p>
                                    <p className="list-subtitle">去<Link to="/">逛逛</Link>看有哪些想买的</p>
                              </div>
                        }
                    </ul>
                    <ul className="list">
                        <div className="list-info">
                            <div className="icon">
                                <i className="iconfont icon-dingdan"></i>
                            </div>
                            <p className="list-title">您还没有相关订单</p>
                            <p className="list-subtitle">去<Link to="/">逛逛</Link>看有哪些想买的</p>
                        </div>
                    </ul>
                    <ul className="list">
                        <div className="list-info">
                            <div className="icon">
                                <i className="iconfont icon-dingdan"></i>
                            </div>
                            <p className="list-title">您还没有相关订单</p>
                            <p className="list-subtitle">去<Link to="/">逛逛</Link>看有哪些想买的</p>
                        </div>
                    </ul>
                    <ul className="list">
                        <div className="list-info">
                            <div className="icon">
                                <i className="iconfont icon-youhuiquan"></i>
                            </div>
                            <p className="list-title">您还没有可使用的优惠券</p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
    tabsHandle(e) {
        e.stopPropagation();
        e.preventDefault();
        const tabs = this.refs.tabs.childNodes;
        const lists = this.refs.lists.childNodes;
        var index = 0;
        for (var i = 0; i < tabs.length; i++) {
            tabs[i]
                .classList
                .remove('ac');
            lists[i]
                .classList
                .remove('show');
            //lists[i].style.display='none'
            if (tabs[i] == e.target) {
                index = i;
            }
        }
        e
            .target
            .classList
            .add('ac');
        //lists[index].style.display='block'
        lists[index]
            .classList
            .add('show')

    }
}

export default UserPuppet;
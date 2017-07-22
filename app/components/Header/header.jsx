import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less'
import { hashHistory } from 'react-router'
class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }
    render() {
        return (
            <div className="header">
                <i className="iconfont icon-fanhui callBack" onClick={this.backHandel.bind(this)}></i>
                <div className="header-title">
                   {this.props.title}
                </div>
            </div>
        );
    }
    backHandel(){
        if(this.props.backRouter){
            hashHistory.push(this.props.backRouter)
        }else{ 
            window.history.back();
        }
       
    }
}

export default Header;
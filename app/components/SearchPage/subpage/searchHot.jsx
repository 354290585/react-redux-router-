import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import '../style.less'
class SearchHot extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }   
    render() {
        return (
            <div>
                <div className="search-hot-content clearfixe">
                    <div className="hot-list">咖啡</div>
                    <div className="hot-list">小龙虾</div>
                    <div className="hot-list">烤鸭</div>
                    <div className="hot-list">局气</div>
                    <div className="hot-list">星巴克</div>
                    <div className="hot-list">自助餐</div>
                    <div className="hot-list">烧烤</div>
                    <div className="hot-list">麻辣烫</div>
                    <div className="hot-list">大保健</div>
                </div>
            </div>
        );
    }
}

export default SearchHot;
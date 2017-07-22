import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
class ShopInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }   
    render() {
        const data = this.props.data
        return (
            <div className="shopInfo">
                <div className="contaniner">
                    <h4>商户信息</h4>
                    <p dangerouslySetInnerHTML={{__html:data.desc}} className="info-desc"></p>
                </div>
            </div>
        );
    }
}

export default ShopInfo;
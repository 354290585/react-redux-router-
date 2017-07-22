import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less'
class NowCityPuppet extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }   
    render() {
        return (
            <div className="now-content">
                <span className="now">当前选择:</span><span className="now-cityname">{this.props.cityName}</span>
            </div>
        );
    }
}

export default NowCityPuppet;
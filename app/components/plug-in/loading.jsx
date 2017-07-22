import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less'
class Loading_animation extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }
    render() {
        return (
            <div className="spinner" style={this.props.style}>
                <div className="rect1" style={this.props.stylea}></div>
                <div className="rect2" style={this.props.stylea}></div>
                <div className="rect3" style={this.props.stylea}></div>
                <div className="rect4" style={this.props.stylea}></div>
                <div className="rect5" style={this.props.stylea}></div>
            </div>
        );
    }
}

export default Loading_animation;
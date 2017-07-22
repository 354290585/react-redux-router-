import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less'
class LastPagePuppet extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }   
    render() {
        return (
            <div className="lastpage">
               {this.props.data.length ? '最后一页' :''} 
            </div>
        );
    }
}

export default LastPagePuppet;
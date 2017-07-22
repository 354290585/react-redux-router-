import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less'
class NoResult extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }   
    render() {
        return (
            <div className="noresult">当前无搜索结果,为你推荐</div>
        );
    }
}

export default NoResult;
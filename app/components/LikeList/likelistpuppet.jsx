import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less'
import LikeListItem from './subpage/likelistitem'
class LikeListPuppet extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }   
    render() {
        const data = this.props.data;
        return (
            <div className="likelist">
                <h2 style={{display:this.props.title,color:this.props.stylea}}>{this.props.title}</h2>
                <div className="list-content">
                    {data.map((item,index)=>{
                        return <LikeListItem data={item} key={index}/>
                    })}
                </div>
            </div>
        );
    }
}

export default LikeListPuppet;
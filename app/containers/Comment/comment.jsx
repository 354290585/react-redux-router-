import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Comment from '../Detail/subpage/comment'
class CommentPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }   
    render() {
        const params = this.props.params;
        return (
            <div>
               <Comment show={true} length={'7'} id={params.id}/>
            </div>
        );
    }
}

export default CommentPage;
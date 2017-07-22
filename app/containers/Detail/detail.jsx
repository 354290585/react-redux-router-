import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Info from '../Detail/subpage/info'
import Comment from '../Detail/subpage/comment'
import Title from '../../components/Header/header'
import LikeList from '../../containers/Home/subpage/likelist'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as categoryActionDispatch from '../../actions/categoryInfo.js'
class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }   
    render() {
        const id = this.props.params.id; 
        return (
            <div style={{backgroundColor:"#fff"}}>
                <Title title={'商户详情'}/>
                <Info id={id}/>
                <div style={{height:'10px',backgroundColor:'#F1F1F1'}}></div>
                <Comment id={id} show={false} length={'2'}/>
                <div style={{height:'10px',backgroundColor:'#F1F1F1'}}></div>
                <LikeList title={'小伙伴们还喜欢'} stylea={'#868686'} cityName={this.props.userInfo.cityName}/>   
            </div>
        );
    }
}
function mapStateToPrors(state){
    return{
        userInfo:state.userInfoReducer,
    }
}
function mapDispatchToPrors(dispatch){
    return{
    }
}

export default connect(
    mapStateToPrors,
    mapDispatchToPrors
)(Detail);
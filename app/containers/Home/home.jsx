import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HomeHeader from '../../components/HomeHeader/homeHeaderPuppet'
import { connect } from 'react-redux'
import CateGory from '../../components/Category/cateGoryPuppet'
import DisCount from './subpage/discount'
import LikeList from '../Home/subpage/likelist'
import SearchPage from './subpage/searchPage.jsx'
import * as categoryActionDispatch from '../../actions/categoryInfo.js'
import {bindActionCreators} from 'redux';
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
        this.state={
            searchPagedisplay:'none',
            searchPagetop:'100%',
            transition:'',
            categoryName:''
        }
    }   
    render() {
        return (
            <div style={{backgroundColor:"#fff"}}>
                <div>
                    <HomeHeader cityName={this.props.userInfo.cityName} displayHandel={this.displayHandel.bind(this)}/>
                    <CateGory categoryActions={this.props.categoryActions}/>
                    <div style={{height:'0.8rem' ,backgroundColor:'#F1F1F1'}}></div>
                    <DisCount></DisCount>
                    <div style={{height:'10px',backgroundColor:'#F1F1F1'}}></div>
                    <LikeList cityName={this.props.userInfo.cityName} title={'猜你喜欢'} stylea={'#f3394e'}/>
                </div>
                <div className="search-page" style={{display:this.state.searchPagedisplay,top:this.state.searchPagetop,transition:this.state.transition}}>
                     <SearchPage displayHandel={this.displayHandel.bind(this)}/>
                </div>
            </div>
        );
    }
    displayHandel(searchPagedisplay,searchPagetop,transition){
        this.setState({
            searchPagedisplay:searchPagedisplay,
            searchPagetop:searchPagetop,
            transition:transition
        })
    }
}
function mapStateToPrors(state){
    return{
        userInfo:state.userInfoReducer,
        catrgoryInfo:state.categoryInfoReducer
    }
}
function mapDispatchToPrors(dispatch){
    return{
         categoryActions: bindActionCreators(categoryActionDispatch, dispatch)
    }
}

export default connect(
    mapStateToPrors,
    mapDispatchToPrors
)(Home);
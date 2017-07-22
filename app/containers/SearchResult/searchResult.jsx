import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less'
import SearchInput from '../../components/SearchPage/subpage/searchInput'
import {hashHistory} from 'react-router'
import SearchList from './subpage/SearchList'
import SearchPage from '../../components/SearchPage/searchPagePuppet'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as categoryActionDispatch from '../../actions/categoryInfo.js'
import NoResult from '../../components/NoResult/noresult'
class SearchResult extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
        this.state={
            searchPagedisplay:'none',
            searchPagetop:'100%',
            transition:'',
        }
    }
    render() {
        const params = this.props.params
        return (
            <div>
                <div style={{backgroundColor:"#fff"}}>
                    <div className="header">
                        <i className="iconfont icon-fanhui callBack" onClick={this.backHandel.bind(this)}></i>
                            <div className="search-header">
                                <div className="searchContent">
                                    <i className="icon-search"></i>
                                    <SearchInput  keyword={params.keyword} enterHandle={this.enterHandle.bind(this)} callBack={this.callBack.bind(this)} category={params.category} searchPagedisplay={this.searchPagedisplay.bind(this)} catrgoryInfo={this.props.catrgoryInfo}/>
                                </div>
                            </div>
                    </div>
                   {/*<NoResult/>*/}
                    <SearchList keyword={params.keyword} category={params.category}/>
                </div>
                <div className="search-page" style={{display:this.state.searchPagedisplay,top:this.state.searchPagetop,transition:this.state.transition}}>
                     <SearchPage displayHandel={this.searchPagedisplay.bind(this)} displayNone={this.displayNone.bind(this)}/>
                </div> 
            </div>    
        );
    }
    searchPagedisplay(searchPagedisplay,searchPagetop,transition){
        this.setState({
            searchPagedisplay:searchPagedisplay,
            searchPagetop:searchPagetop,
            transition:transition
        })
    }
    displayNone(none){
        this.setState({
            searchPagedisplay:none
        })
    }
    callBack(){
        window.history.back();
    }
    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
    backHandel() {
       hashHistory.push('/')
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
       
    }
}

export default connect(
    mapStateToPrors,
    mapDispatchToPrors
)(SearchResult);
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Likelistpuppet from '../../../components/LikeList/likelistpuppet'
import LoadMore from '../../../components/loadmore/loadmorePuppet'
import LastPage from '../../../components/loadmore/lastpage'
import { connect} from 'react-redux'
import {getSearchData} from '../../../fetch/search/search.js'
import Loading_animation from '../../../components/plug-in/loading'
class SearchList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
        this.state={
            hasMore:true,
            data:[],
            page:0,
            isLoadingMore:false,
            ceshi:[]
        }
    }   
    render() {
        return (
            <div>
                {
                   this.state.data.length ? <Likelistpuppet  data={this.state.data} title={'none'}/> : <Loading_animation/>
                }
                {this.state.hasMore ? <LoadMore isLoading={this.state.isLoadingMore} isLoadMoreData={this.LoadMoreData.bind(this)} data={this.state.data}/> :<LastPage data={this.state.data}/>}
             
            </div>
        );
    }
    componentWillMount(){
        this.loadFirstPage();
    }
    //获取首页数据
    loadFirstPage(){
        const cityName = this.props.userInfo.cityName;
        const page = this.state.page;
        const category = this.props.category;
        const keyword = this.props.keyword;
        const result = getSearchData(page,cityName,category,keyword)
        this.resultHandle(result);
        this.setState({
            page:page+1
        })
    }
    //loadMore
    LoadMoreData(){
        this.setState({
            isLoadingMore:true
        })
        const cityName = this.props.userInfo.cityName;
        const page = this.state.page;
        const category = this.props.category;
        const keyword = this.props.keyword;
        const result = getSearchData(page,cityName,category,keyword)
        this.resultHandle(result); 
        this.setState({
            page:page+1,
            isLoadingMore:false
        }) 
    }
    //处理返回的数据
    resultHandle(result) {
        result.then(response => {
            return response.json()
        }).then(json => {
            const hasMore = json.hasMore;
            const data = json.data;
            if(data.length){
                this.setState({
                    hasMore: hasMore,
                    data: data.concat(this.state.data)
                })
            }
        }).catch(e => {
            if (__DEV__) {
                console.log('搜索结果出错..' + e.message)
            }
        });
    }
}
function mapStateToPrors(state){
    return{
        userInfo:state.userInfoReducer
    }
}
function mapDispatchToPrors(dispatch){
    return{

    }
}

export default connect(
    mapStateToPrors,
    mapDispatchToPrors
)(SearchList);
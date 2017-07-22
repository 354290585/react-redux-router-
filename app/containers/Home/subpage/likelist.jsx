import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import LikeListPuppet from '../../../components/LikeList/likelistpuppet'
import {getLikeListData} from '../../../fetch/home/home.js'
import LoaderMorePuppet from '../../../components/loadmore/loadmorePuppet.jsx'
import LastPage from '../../../components/loadmore/lastpage'
import Loading_animation from '../../../components/plug-in/loading'
class LikeList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
        this.state = {
            hasMore: true,
            data: [],
            isLoading: false,
            page: 1,
        }
    }
    render() {
        var a = this.state.data.length ? '0' : '4rem'
        return (
            <div style={{backgroundColor:'#fff',paddingTop:a}}>
            {this.state.data.length ? <LikeListPuppet title={this.props.title} stylea={this.props.stylea} data={this.state.data}/> : ''}
               
                    

                {this.state.hasMore
                    ? <LoaderMorePuppet
                            isLoading={this.state.isLoading}
                            isLoadMoreData={this
                            .isLoadMoreData
                            .bind(this)}
                            data={this.state.data}/>
                    : <LastPage/>}
            </div>
        );
    }
    componentDidMount() {
        //获取首页数据
        this.loaderFirstPageData();
    }
    //获取首页数据
    loaderFirstPageData() {
        var cityName = this.props.cityName;
        const result = getLikeListData(cityName, 0)
        //处理请求回的数据
        this.resultHandle(result);
    }
    //加载更多
    isLoadMoreData() {
        this.setState({isLoading: true})
        var cityName = this.props.cityName;
        var page = this.state.page;
        const result = getLikeListData(cityName, page)
        this.resultHandle(result);
        this.setState({
            page: page + 1,
            isLoading: false
        })

    }
    //处理请求回的数据
    resultHandle(result) {
        result.then(response => {
            return response.json()
        }).then(json => {
            const hasMore = json.hasMore;
            const data = json.data;
            this.setState({
                hasMore: hasMore,
                data: data.concat(this.state.data)
            })
        }).catch(e => {
            if (__DEV__) {
                console.log('猜你喜欢数据请求错误..' + e.message)
            }
        })
    }
}

export default LikeList;
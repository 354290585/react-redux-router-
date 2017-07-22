import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {getComment} from '../../../fetch/detail/detail.js'
import CommentList from '../../../components/Comment/comment'
import Tiltle from '../../../components/Header/header'
import LoadIngAnimation from '../../../components/plug-in/loading'
import LoaderMorePuppet from '../../../components/loadmore/loadmorePuppet'
class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
        this.state = {
            hasMore: false,
            data: [],
            count: false,
            show: true,
            isLoading: false,
            page:1

        }
    }
    render() {
        return (
            <div style={{
                backgroundColor: "#fff"
            }}>
                {this.state.data.length
                    ? <div>{this.state.show
                                ? <Tiltle title={'网友热评'}/>
                                : ''}
                            <CommentList
                                data={this.state.data}
                                count={this.state.count}
                                id={this.props.id}
                                show={this.state.show}
                                length={this.props.length} 
                                isLoading={this.state.isLoading}
                                isLoadMoreData={this.loadData.bind(this)}
                                hasMore={this.state.hasMore}/>
                        </div>   
                    : <LoadIngAnimation/>}

            </div>
        );
    }
    componentWillMount() {
        this.setState({show: this.props.show})
    }
    componentDidMount() {
        this.loadfirstComment();
    }
    loadfirstComment() {
        const id = this.props.id;
        const result = getComment(1, id);
        result.then(response => {
            return response.json();
        }).then(json => {
            if (!Object.keys(json).length == 0) {
                this.setState({hasMore: json.hasMore, count: json.count, data: json.data,page:this.state.page+1})
            }
        }).catch(e => {
            if (__DEV__) {
                console.error('获取评论数据出错啦!!!' + e.message)
            }
        })
    }
    loadData() {
        this.setState({isLoading: true})
        const page = this.state.page;
        const id = this.props.id;
        const result = getComment(page, id);
        result.then(response => {
            return response.json();
        }).then(json => {
            if (!Object.keys(json).length == 0) {
                const hasMore = json.hasMore;
                const data = json.data;
                this.setState({
                    hasMore: json.hasMore,
                    count: json.count,
                    data: data.concat(this.state.data),
                    page:this.state.page+1
                })
            }
        }).catch(e => {
            if (__DEV__) {
                console.error('获取评论数据出错啦!!!' + e.message)
            }
        })
        this.setState({isLoading: false})
    }
}

export default Comment;
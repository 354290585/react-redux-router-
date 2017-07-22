import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less'
import Star from '../Star/star'
var img = require('../../static/images/base.js')
import { Link } from 'react-router'
import Loading from '../../components/plug-in/loading'
class CommentList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }   
    render() {
                const style={
            margin:'0 auto',
            height:'28px',
        }
        const stylea={
            width:'3px'
        }

        const data = this.props.data.slice(0,this.props.length);
        const count = this.props.count;
        const id = this.props.id;
        return (
            <div className="comment">
                <div className="contaniner">
                    {this.props.show ? '' 
                      : <div className="title clearfixe">
                            <span className="float-left left">网友点评 ( {count}条 )</span>
                            <Link to={'/comment/'+id}><span className="float-right right">查看全部<i className="iconfont icon-xiayibu2"></i></span></Link>
                        </div>
                    }
                    {this.props.show ? <div>   {this.props.data.map((item,index)=>{
                        return  <div className="list clearfixe" key={index}>
                                    <img src={img.base2} alt="用户头像" className="float-left userImg listleft"/>
                                    <div className="listright float-left">
                                        <p className="username">{item.username}</p>
                                        <Star starNum={item.star}/>
                                         <Link to={'/comment/'+id}><p className="text">{item.comment}</p>
                                        <div className="commentImgs">
                                            {item.img ?
                                                item.img.map((item,index)=>{
                                                    return <img src={item} alt="评论图片" key={index}/>
                                                }) :''
                                            }
                                        </div></Link>
                                    </div>
                                </div>
                    })}</div> : <div>    {data.map((item,index)=>{
                        return  <div className="list clearfixe" key={index}>
                                    <img src={img.base2} alt="用户头像" className="float-left userImg listleft"/>
                                    <div className="listright float-left">
                                        <p className="username">{item.username}</p>
                                        <Star starNum={item.star}/>
                                         <Link to={'/comment/'+id}><p className="text">{item.comment}</p>
                                        <div className="commentImgs">
                                            {item.img ?
                                                item.img.map((item,index)=>{
                                                    return <img src={item} alt="评论图片" key={index}/>
                                                }) :''
                                            }
                                        </div></Link>
                                    </div>
                                </div>
                    })}</div> }
                 
                </div>
                <div ref="wrapper">
                    {this.props.isLoading ? <Loading style={style} stylea={stylea}/> : <div>{this.props.show ? <div className="lastpage" onClick={this.loadMoreHandle.bind(this)}>{this.props.hasMore ? '加载下一页' : '最后一页' }</div> : ''}</div>}
                </div>
            </div>
        );
    }
    componentDidMount(){
        let time;
        const wrapper = this.refs.wrapper;
        const loadMore = this.props.isLoadMoreData;
        function callBack(){
            const top = wrapper.getBoundingClientRect().top
            const windowHeight = window.screen.height
            if(top && top<windowHeight){
                loadMore();
            }
        }
       window.addEventListener('scroll',function(){
           if(this.props.isLoading){
               return
           }
           if(time){
               clearTimeout(time)
           }
           time = setTimeout(callBack,100)
      }.bind(this),false)
    }
    loadMoreHandle(){
        this.props.isLoadMoreData();
    }
}

export default CommentList;
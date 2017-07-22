import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less'
import Loading_animatom from '../../components/plug-in/loading'
class LoaderMorePuppet extends React.Component {
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
        return (
            <div className="loading" ref="wrapper">
              {this.props.isLoading ? <Loading_animatom style={style} stylea={stylea}/> : <div className="load" onClick={this.loadMoreHandle.bind(this)}>{this.props.data.length ? <Loading_animatom style={style} stylea={stylea}/> :''}</div>}  
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
           time = setTimeout(callBack,50)
      }.bind(this),false)
    }
    loadMoreHandle(){
        this.props.isLoadMoreData();
    }
}

export default LoaderMorePuppet;
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less'
import {hashHistory} from 'react-router'
import SearchHot from './subpage/searchHot'
import SearchHistory from './subpage/searchHistory'
import SearchInput from './subpage/searchInput'
import localStor from '../../util/localStore.js'
class SearchPagePuppet extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
        this.state = {
            value: '',
            show:false
        }
    }
    render() {
        const arr =JSON.parse(localStor.getItem('searchCategory'));
        return (
            <div>
                <div className="search-header clearfixe">
                    <div className="searchContent">
                        <i className="icon-search"></i>
                        {/*<SearchInput enterHandle={this.enterHandle.bind(this)}/>*/}
                        <input className="input"  autoFocus={true} type="text"
                        placeholder={this.props.keyword ? this.props.keyword :'搜索商户、地点'}
                        onChange={this.ChangeHandle.bind(this)}
                        onKeyUp={this.KeyUpHandle.bind(this)}
                        value={this.state.value}
                        ref={(input) => { this.textInput = input; }}
                        />
                    </div>
                    <span
                        className="cancle"
                        onClick={this.onSearchHandel.bind(this, 'block', '100%','top 0.3s ease-out 0s')}>取消</span>
                </div>
                <SearchHot/>
                <div>
                    {this.state.show ? <div className="searchhistory-content">
                        <h4 className="search-history">搜索记录</h4>
                        <ul>
                            {arr.map((item,index)=>{
                                return <li key={index}>{item}</li>
                            })}
                            <li className="clear" ><span onClick={this.clearHistory.bind(this)}>清楚历史记录</span></li>
                        </ul>
                    </div> : ''}
                </div>
            </div>
        );
    }
    //  componentWillMount(){
    //     const arr =JSON.parse(localStor.getItem('searchCategory'));
    //     if(arr.length){
    //         this.setState({
    //             show:true
    //         })
    //     }
    // }
    clearHistory(){
       const arr =JSON.parse(localStor.getItem('searchCategory'));
       arr.splice(0,arr.length);
       localStor.setItem('searchCategory',JSON.stringify(arr));
      this.setState({
          show:false
      })
    }
    componentDidMount(){
        if(localStor.getItem('searchCategory')==null){
            var arr = [];
            localStor.setItem('searchCategory',JSON.stringify(arr));
        }
        const array =JSON.parse(localStor.getItem('searchCategory'));
        if(array.length){
            this.setState({
                show:true
            })
        }
    }
    KeyUpHandle(e) {
        // 监控 enter 事件
        if (e.keyCode !== 13 || e.target.value=='') {
            return
        }
        var value =  e.target.value;
        var none = 'none';
        this.props.displayNone(none);

        var arr = JSON.parse(localStor.getItem('searchCategory'));
        if(arr.length >= 7 ){
            arr.splice(6,1)
        }
        arr.splice(0,0,value);
        localStor.setItem('searchCategory',JSON.stringify(arr));
        hashHistory.push('/search/all/' + encodeURIComponent(e.target.value));
    }
    ChangeHandle(e) {
        // 监控变化
        this.setState({
            value: e.target.value
        })
    }
    // enterHandle(value) {
    //     hashHistory.push('/search/all/' + encodeURIComponent(value))
    // }
    onSearchHandel(contentDisplay, searchPageDisplay,transition) {
        this.props.displayHandel(contentDisplay, searchPageDisplay,transition);
    }
}

export default SearchPagePuppet;
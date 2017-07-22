import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import '../style.less'
import localStor from '../../../util/localStore.js'
class SearchHistory extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
        this.state={
            show:false,
        }
    }   
    render() {
        const arr =JSON.parse(localStor.getItem('searchCategory'));
        return (
            <div>
                {this.state.show ? <div className="searchhistory-content">
                    <h4 className="search-history">搜索记录</h4>
                    <ul>{console.log(this.props.arr)}
                        {arr.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })}
                        <li className="clear" ><span onClick={this.clearHistory.bind(this)}>清楚历史记录</span></li>
                    </ul>
                </div> : ''}
            </div>
        );
    }
    componentWillMount(){
        const arr =JSON.parse(localStor.getItem('searchCategory'));
        if(arr.length){
            this.setState({
                show:true
            })
        }
    }
    clearHistory(){
       const arr =JSON.parse(localStor.getItem('searchCategory'));
       arr.splice(0,arr.length);
       localStor.setItem('searchCategory',JSON.stringify(arr));
      this.setState({
          show:false
      })
    }
}

export default SearchHistory;
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import '../style.less'
class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
        this.state = {
            value: '',
        }
    }
    render() {
        return (
            <input className="input"  type="text"
            placeholder={this.props.keyword ? this.props.keyword : this.props.catrgoryInfo.categoryName}
            // placeholder={this.props.keyword ? this.props.keyword :'搜索商户、地点'}
            onChange={this.ChangeHandle.bind(this)}
            onKeyUp={this.KeyUpHandle.bind(this)}
            onClick={this.searchPagedisplay.bind(this,'block','0px','')}
            />
        );
    }
    searchPagedisplay(searchPagedisplay,searchPagetop,transition){
        this.props.searchPagedisplay(searchPagedisplay,searchPagetop,transition)
    }
    componentDidMount() {
        // 默认值
        this.setState({
            value: this.props.value || ''
        })
    }
    ChangeHandle(e) {
        // 监控变化
        this.setState({
            value: e.target.value
        })
    }
    KeyUpHandle(e) {
        // 监控 enter 事件
        if (e.keyCode !== 13 || e.target.value=='') {
            return
        }
        this.props.enterHandle(e.target.value)
    }
}

export default SearchInput;
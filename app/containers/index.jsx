import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import localStore from '../util/localStore.js';
import {CITYNAME} from '../util/localStoreKey.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActionsAll from '../actions/userinfo.js';
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                {this.state.initDone
                    ? this.props.children
                    : <div>加载中...</div>}
            </div>
        )
    }
    componentDidMount() {
        //获取位置信息
        let cityName = localStore.getItem(CITYNAME);
        if (cityName == null) {
            cityName = "北京"
        }
        this
            .props
            .userInfoActions
            .updata({cityName: cityName})
        this.setState({initDone: true})
    }
}
function mapStateToProps(state) {
    return {
       userInfo:state.userInfoReducer,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsAll, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import CityPuppet from '../../components/City/cityPuppet'
import Header from '../../components/Header/header'
import NowCityPuppet from '../../components/City/nowCity'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import lcoalStore from '../../util/localStore.js'
import {CITYNAME} from '../../util/localStoreKey.js';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js'
import {  hashHistory } from 'react-router'
class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }
    render() {
        return (
            <div>
                <Header title={'选择城市'}/>
                <NowCityPuppet cityName={this.props.userInfo.cityName}/>
                <CityPuppet
                    changeFn={this
                    .changCity
                    .bind(this)}/>
            </div>
        );
    }
    changCity(newCity) {
        if (newCity == null) {
            return
        }
        const userInfo = this.props.userInfo;
        userInfo.cityName = newCity;
        lcoalStore.setItem(CITYNAME, newCity);
        this
            .props
            .userInfoActions
            .updata(userInfo)
         hashHistory.push('/')
    }
}
function mapStateToPrors(state) {
    return {userInfo: state.userInfoReducer}
}
function mapDispathToPrors(dispath) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispath)
    }
}

export default connect(mapStateToPrors, mapDispathToPrors)(City);
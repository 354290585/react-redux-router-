import React from 'react'
import {render} from 'react-dom'
import {hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import configureStore from './store/store.js'
import RouteMap from './router/routeMap'
import './static/css/common.less'
import './static/css/normalize.css'
import './static/css/font.css'
import './static/css/iconfont.css'
// 创建 Redux 的 store 对象
const store = configureStore()

render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root'))
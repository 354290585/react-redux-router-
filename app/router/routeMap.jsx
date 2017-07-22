import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import App from '../containers/index.jsx'
import Home from '../containers/Home/home'
import City from '../containers/City/city'
import SearchResult from '../containers/SearchResult/searchResult'
import Detail from '../containers/Detail/detail'
import Comments from '../containers/Comment/comment'
import Login from '../containers/Login/Login'
import User from '../containers/User/User'
// 如果是大型项目，router部分就需要做更加复杂的配置 参见
// https://github.com/reactjs/react-router/tree/master/examples/huge-apps

export default class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path='/city' component={City}></Route>
                    <Route path='/search/:category(/:keyword)' component={SearchResult}/>
                    <Route path='/detail/:id' component={Detail}/>                    
                    <Route path='/comment/:id' component={Comments}/>    
                    <Route path='/login(/:router)' component={Login}/>                                        
                    <Route path='/User' component={User}/>                                        
                </Route>
            </Router>
        )
    }
}

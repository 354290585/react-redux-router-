import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'
import * as UserInfoActions from '../../actions/userinfo.js'
import LoginPuppet from '../../components/Login/loginPuppet'
import Title from '../../components/Header/header'
import LoadAnimation from '../../components/plug-in/loading'
class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
        this.state = {
            checking: true
        }
    }   
    render() {
        return (
           <div style={{backgroundColor:'#fff'}}>
                {this.state.checking 
                    ?  <div><Title title={'登录'}/><LoadAnimation/></div>
                    :  <div style={{backgroundColor:'#fff'}}>
                            <Title title={'登录'}/>
                            <LoginPuppet loginHandle={this.loginHandle.bind(this)}/>
                        </div>
                }
            </div>
            
        );
    }
    componentDidMount() {
        // 判断是否已经登录
      this.doCheck();
    }
    doCheck() {
        const userinfo = this.props.userinfo
        if (userinfo.username) {
            // 已经登录，则跳转到用户主页
            this.goUserPage();
        } else {
            // 未登录，则验证结束
            this.setState({
                checking: false
            })
        }
    }
    // 处理登录之后的事情
    loginHandle(username) {
        // 保存用户名
        const actions = this.props.userInfoAction
        const userinfo = this.props.userinfo
        userinfo.username = username
        actions.updata(userinfo)

        const params = this.props.params
        const router = params.router
        if (router) {
            // 跳转到指定的页面
            hashHistory.push(router)
        } else {
            // 跳转到用户主页
            this.goUserPage()
        }
    }
    goUserPage() {
        hashHistory.push('/User')
    }
}
function mapStateToPrors(state){
    return{
        userinfo:state.userInfoReducer,
    }
}
function mapDispatchToPrors(dispatch){
    return{
       userInfoAction:bindActionCreators(UserInfoActions,dispatch)
    }
}
export default connect(
    mapStateToPrors,
    mapDispatchToPrors
)(Login);
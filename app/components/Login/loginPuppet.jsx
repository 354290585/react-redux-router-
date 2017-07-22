import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less'
class LoginPuppet extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
        this.state = {
            username: '',
            show:false,
            login:false
        }
    }
    render() {
        return (
            <div id="login-container">  
                    <div className="err" style={{opacity:this.state.show ? 1 :0}}>
                        <i className="iconfont icon-xxxxxx-"></i>
                        <span>请输入正确手机号</span>
                     </div>
                <div className="input-container phone-container clearfixe">
                    <i className="iconfont icon-shouji"></i>
                    <input
                        type="text"
                        placeholder="输入手机号"
                        onChange={this
                        .changeHandle
                        .bind(this)}
                        value={this.state.username}
                        onBlur={this.onBlurHandle.bind(this)}
                        onFocus={this.onFocusHandle.bind( this)}/>
                </div>
                <div className="input-container password-container clearfixe">
                    <i className="iconfont icon-yanzhengma yanzheng"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码" />
                </div>
                <button
                    className="btn-login"
                    onClick={this
                    .clickHandle
                    .bind(this)}>登录
                </button>

            </div>
        );
    }

    onFocusHandle(){
        this.setState({
            show:false
        })
    }
    onBlurHandle(){
        var value = this.state.username;
        var re = /^1[34578]\d{9}$/;
        if(re.test(value)){
            this.setState({
                login:true
            })
        }else{
             this.setState({
                 show:true
             })
        }
    }
    changeHandle(e) {
        this.setState({username: e.target.value})
    }
    clickHandle() {
        const username = this.state.username
        const loginHandle = this.props.loginHandle
        if(this.state.login){
             loginHandle(username);
        }else{
            this.setState({
                 show:true
            })  
        }
       
    }
}

export default LoginPuppet;
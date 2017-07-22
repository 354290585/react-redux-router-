import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {getInfo} from '../../../fetch/detail/detail.js'
import DetailInfo from '../../../components/DetailInfo/detailinfo'
import ShowInfo from '../../../components/DetailInfo/shopinfo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storAction from '../../../actions/stor.js'
import { hashHistory } from 'react-router'
class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
        this.state = {
            info:false,
            isStore: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.info ?  <div>
                                            <DetailInfo data={this.state.info} isStore={this.state.isStore} storeHandle={this.storeHandle.bind(this)} buyHandle={this.buyHandle.bind(this)}/>
                                            <div style={{height:'10px',backgroundColor:'#F1F1F1'}}></div>
                                            <ShowInfo data={this.state.info}/>
                                        </div> : ''
                }
            </div>
        );
    }
    componentDidMount(){
       this.getDetailInfo();
       // 验证当前商户是否收藏
       this.checkStoreState()
    }
    getDetailInfo(){
        const id = this.props.id;
        const result = getInfo(id);
        result.then(response=>{
            return response.json();
        })
        .then(json=>{
            if(Object.keys(json).length==0){
                console.error('获取数据为空')
                return;
            }
            this.setState({
                info:json
            })
        })
        .catch(e=>{
            if(__DEV__){
               console.error('详情页，获取商户信息出错'+e.message) 
            }
        })
    }
    // 检验当前商户是否被收藏
    checkStoreState() {
        const id = this.props.id
        const stor = this.props.stor
        // some 即任何一个满足即可
        stor.some(item => {
            if (item.id === id) {
                // 已经被收藏
                this.setState({
                    isStore: true
                })
                // 跳出循环
                return true
            }
        })
    }
     // 检查登录状态
    loginCheck() {
        const id = this.props.id
        const userinfo = this.props.userinfo
        if (!userinfo.username) {
            // 跳转到登录页面的时候，要传入目标router，以便登录完了可以自己跳转回来
            hashHistory.push('/login/' + encodeURIComponent('/detail/' + id))
            return false
        }
        return true
    }
     // 购买事件
    buyHandle() {
        // 验证登录，未登录则retur
        const loginFlag = this.loginCheck()
        if (!loginFlag) {
            return
        }

        // 此过程为模拟购买，因此可省去复杂的购买过程

        // 跳转到用户主页
        hashHistory.push('/User')
    }
    // 收藏事件
    storeHandle() {
        // 验证登录，未登录则return
        const loginFlag = this.loginCheck()
        if (!loginFlag) {
            return
        }
        const id = this.props.id
        const storActions = this.props.storActions
        if (this.state.isStore) {
            // 已经被收藏了，则取消收藏
            storActions.rm({id:id})
        } else {
            // 未收藏，则添加到收藏中
            storActions.add({id:id})
        }
        // 修改状态
        this.setState({
            isStore: !this.state.isStore
        })
    }
}
   function mapStateToProps(state){
        return{
            userinfo:state.userInfoReducer,
            stor:state.loginReducer
        }
    }
   function mapDispatchToProps(dispatch){
        return{
            storActions:bindActionCreators(storAction,dispatch)
        }
    }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Info);
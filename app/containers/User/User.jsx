import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Title from '../../components/Header/header'
import UserPuppet from '../../components/User/userpuppet'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'
import { getOrderListData } from '../../fetch/order/orderlist.js'
class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
        this.state={
            data:false
        }
    }
    render() {
        return (
            <div>
                <Title title={'个人中心'} backRouter={'/'}/>
                <UserPuppet data={this.state.data}/>
            </div>
        );
    }
    componentDidMount() {
        if(!this.props.userInfo.username){
            hashHistory.push('/login')
        }
           this.getOrder();
    }
    getOrder(){
        const username = this.props.userInfo.username;
        const result = getOrderListData(username);
        result.then(res=>{
            return res.json();
        })
        .then(json=>{
            if(!Object.keys(json).length==0){
                this.setState({
                    data:json
                })
            }
        })
        .catch(e=>{
            if(__DEV__){
                console.error('获取订单数据出错'+e.message)
            }
        })
    }
    
}
function mapStateToProps(state){
    return{
        userInfo:state.userInfoReducer
    }
}
function mapDispatchToProps(dispatch){
    return{
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User)
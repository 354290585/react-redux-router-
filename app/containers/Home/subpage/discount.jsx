import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import DisCountPuppet from '../../../components/Discount/disCountPuppet'
import { geDisCounttData } from '../../../fetch/home/home.js'
import Loading_animation from '../../../components/plug-in/loading'
class DisCount extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
        this.state = {
            data:[],
        }
    }   
    render() {
        return (
            <div>
                {this.state.data.length ? <DisCountPuppet data={this.state.data}/> :  <Loading_animation/>}
            </div>
        );
    }
    componentDidMount(){
        var result = geDisCounttData();
        result.then(response=>{
            return response.json();
        })
        .then(json=>{
             const data = json;
             if(data.length){
                this.setState({data:data});
             }
        }).catch(e=>{
            console.log('获取超值特惠数据出错！！',e.message)
        })
    }
}

export default DisCount;
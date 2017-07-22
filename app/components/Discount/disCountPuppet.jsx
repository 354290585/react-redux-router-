import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less'
class DiscountPuuet extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }   
    render() {
        return (
            <div className="discount">
                <h2>超值特惠</h2>
                <div className="discount-content clearfixe">
                    {this.props.data.map((item,index)=>{
                        return <div key={index} className="diccount-item float-left">
                                    <a href={item.link} target="_blank"><img src={item.img} alt={item.title}/></a>
                               </div>
                    })}
                </div>
            </div>
        );
    }
}

export default DiscountPuuet;
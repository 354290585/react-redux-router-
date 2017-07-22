import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import '../style.less'
import { Link } from 'react-router'
class LikeListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }   
    render() {
        const data =this.props.data;
        
        return (
            <Link to={'/detail/'+data.id}>
                <div className="item clearfixe">
                    <div className="item-padding">
                        <div className="item-img float-left">
                            <img src={data.img} alt={data.title}/>
                        </div>
                        <div className="item-content float-right">
                            <div className="item-title clearfixe">
                                <h3 className="float-left">{data.title}</h3>
                                <span className="float-right">{data.distance}</span>
                            </div>
                            <p className="item-subtitle">{data.subTitle}</p>
                            <div className="item-price clearfixe">
                                <span className="price float-left">￥{data.price}</span>
                                <span className="number float-right">已售:  {data.mumber}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default LikeListItem;
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';
import {Link} from 'react-router'
class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }
    render() {
        return (
            <div className="home-header clearfixe">
                <div className="city float-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        <i className="icon-chevron-thin-down"></i>
                    </Link>
                </div>
                <Link to="/login">
                    <div className="userInfo float-right">
                        <i className="icon-user"></i>
                    </div>
                </Link>
                <div className="search">
                    <div className="searchContent">
                        <i className="icon-search"></i>
                        <input
                            className="input"
                            type="text"
                            placeholder={"搜索商户、地点"}
                            onClick={this
                            .onSearchHandel
                            .bind(this, 'block', '0px', '')}/>
                    </div>
                </div>
            </div>
        );
    }
    onSearchHandel(searchPagedisplay, searchPagetop, transition) {
        this
            .props
            .displayHandel(searchPagedisplay, searchPagetop, transition);
    }
}

export default HomeHeader;
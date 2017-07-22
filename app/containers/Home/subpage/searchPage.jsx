import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SearchPagePuppet from '../../../components/SearchPage/searchPagePuppet'
class SearchPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }   
    render() {
        return (
            <div>
                <SearchPagePuppet displayHandel={this.props.displayHandel.bind(this)} displayNone={this.displayNone.bind(this)}/>
               
            </div>
        );
    }
    displayNone(none){
        
    }
}

export default SearchPage;
import React from 'react';
import Select from './Select';

export default class MoreButton extends React.Component{
    render(){
        return(
            this.props.visible ?
            <Select class="app__btn btn__load" clickHandler={this.props.clickHandler} id="load-btn">
                Load more
            </Select> : null
        );
    }
}

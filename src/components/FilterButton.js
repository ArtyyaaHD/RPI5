import React from 'react';
import Select from './Select';

export default class FilterButton extends React.Component{
    render(){
        return(
            <Select class="app__btn btn__filter" clickHandler={this.props.clickHandler} id="filter-btn">
                Filter
            </Select>
        );
    }
}

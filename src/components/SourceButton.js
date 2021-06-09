import React from 'react';
import Select from './Select';

export default class SourceButton extends React.Component{
    render(){
        return(
            <Select clickHandler={this.props.clickHandler} id={this.props.id}>
                {this.props.children}
            </Select>
        );
    }
}

import React from 'react';

export default class Select extends React.Component{
    render(){
        return(
            <option className={this.props.class} onClick={this.props.clickHandler} id={this.props.id}>
                {this.props.children}
            </option>
        );
    }
}

import React from 'react';
import SourceButton from './SourceButton';

export default class SourcesSelect extends React.Component{
    render(){
        return(
            <select id="select_sources">
                <option value="null" id="null" onClick={this.props.clickHandler}>All</option>
                {this.props.sources.map((source) => {
                    return (
                        <SourceButton id={source.id} key={source.id} value={source.id} clickHandler={this.props.clickHandler}>
                            {source.name}
                        </SourceButton>
                    );
                })}
            </select>
        );
    }
}

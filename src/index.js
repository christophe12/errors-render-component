import isEmpty from 'lodash.isempty';
import React, { Component } from 'react';
import './style.css';

class RenderErrors extends Component {
    constructor(props) {
        super(props);
    }
    renderErrors(errors) {
        if (!isEmpty(errors)) {
            const List = errors.map((error, index) => {
                return (
                    <li key={`${error}-${index}`}>{error}</li>
                );
            })
    
            return (
                <ul className="errors-list">
                    {List}
                </ul>
            );
        }

        return <div className="hide"></div>
    }
    render() {
        const { errorData } = this.props;
        return (
            <div>
                {this.renderErrors(errorData)}
            </div>
        );
    }
}

export default RenderErrors;
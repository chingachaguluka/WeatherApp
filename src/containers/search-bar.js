import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor (props){
        super(props);

        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    render() {

        return (
            <div>
                <form className="input-group">
                    <input type="text" onChange={this.onInputChange} value={this.props.term} placeholder="Enter the city to get weather info" />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
            </div>
        );
    }

}
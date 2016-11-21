import React, { Component } from 'react';
import { fetchWeather } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class SearchBar extends Component {

    constructor (props){
        super(props);

        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {

        return (
            <div>
                <form className="input-group" onSubmit={this.onFormSubmit}>
                    <input type="text" onChange={this.onInputChange} className="form-control"
                    value={this.props.term} 
                    placeholder="Enter the city to get weather info" />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
            </div>
        );
    }

}

function bindDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect (null, bindDispatchToProps)(SearchBar);
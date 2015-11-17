import React, { createClass } from 'react';

const Input = createClass({
    propTypes: {
        handleInput: React.PropTypes.func.isRequired
    },

    getInputnSearch() {
        let input = this.refs.search.value;
        // send the input up a component to where the state lives and then
        // fire off the request to wiki api.
        this.props.handleInput(input);
    },

    render() {
        return (
            <div className="row search-wrapper">
                <form className="form-inline" role="form"
                    onSubmit={this.getInputnSearch}>
                    <div className="form-group">
                        <label for="search">Search</label>
                        <input type="text" className="form-control"
                            id="search" ref="search" placeholder="Wiki..." />
                    </div>
                    <button type="submit" className="btn btn-primary"
                        value="submit" >Search</button>
                </form>
            </div>
        );
    }
});

export default Input;
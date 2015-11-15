import React, { createClass } from 'react';

/*** components ***/
import Input from './Wiki/Input';

/*** Data ***/
import getResultsWiki from '../utils/wikiHelper';

const Search = createClass({
    getInitialState() {
        return {
            results: {},
            input: ''
        };
    },

    handleInput(input) {
        console.log(`the input is ${input}`);
        this.setState({
            input: input
        });

        getResultsWiki(input)
            .then(({ results }) => {

                this.setState({
                    results: results
                });
                console.log(`state results ${JSON.stringify(this.state.results, null, 4)}`);
            });

    },

    render() {
        return (
            <div>
                <Input handleInput={this.handleInput}/>
                <p>{this.state.input}</p>
            </div>
        );
    }
});

export default Search;
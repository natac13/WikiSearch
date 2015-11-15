import React, { createClass } from 'react';

/*** components ***/
import Input          from './Wiki/Input';
import DisplayResults from './Wiki/DisplayResults';

/*** Data ***/
import getResultsWiki from '../utils/wikiHelper';

const Search = createClass({
    getInitialState() {
        return {
            results: [],
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
                console.log(`results from search.js: ${JSON.stringify(results, null, 4)}`);

                /*** there is an error property on the results object if there is no search param
                in the query for the URL ***/
                if(!results.error) {
                    this.setState({
                        results: results.query.search
                    });
                }
                else{
                    // clears the list when then user 'backspaces' the search
                    this.setState({
                        results: []
                    });
                }
                // console.log(`state results ${JSON.stringify(this.state.results, null, 4)}`);
            });

    },

    render() {
        return (
            <div>
                <Input handleInput={this.handleInput}/>
                <p>Input : {this.state.input}</p>
                <DisplayResults results={this.state.results} />
            </div>
        );
    }
});

export default Search;
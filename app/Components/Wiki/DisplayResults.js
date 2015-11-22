import React, { createClass } from 'react';

const DisplayResults = createClass({
    createMarkup(x) { return {__html: x}; },

    generateURL(search) {
        return `https://en.wikipedia.org/wiki/${search.split(' ').join('%20')}`;
    },


    render() {
        const resultsList = this.props.results.map((result, index) => {
            // My attempt at not using dangerouslysetHTML
            // let regex = /(?:<\/?span>?)\s?(?:class="searchmatch">)?/g;
            // let cleaned = result.snippet.replace(regex, '');
            // console.log(cleaned);
            const url = this.generateURL(result.title);
            return (
                <a href={url} target="_blank" key={index}>
                    <li className="list-group-item result" >
                        <h3>{result.title}</h3>
                        {<p dangerouslySetInnerHTML=
                            {this.createMarkup(result.snippet)}></p>}
                        {/*<p> {cleaned}</p>*/}
                        <p>Number of words: {result.wordcount}</p>
                    </li>
                </a>
            );
        });
        return (
            <ul className="list-group results-wrapper">
                {resultsList}
            </ul>
        );
    }
});

export default DisplayResults;
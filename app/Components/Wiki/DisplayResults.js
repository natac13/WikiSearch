import React, { createClass } from 'react';

const DisplayResults = createClass({
    createMarkup(x) { return {__html: x}; },

    generateURL(search) {
        return `https://en.wikipedia.org/wiki/${search.split(' ').join('%20')}`;
    },


    render() {
        const resultsList = this.props.results.map((result, index) => {
            // let regex = /(?:<\/?span>?)\s?(?:class="searchmatch">)?/g;
            // let cleaned = result.snippet.replace(regex, '');
            // console.log(cleaned);
            const url = this.generateURL(result.title);
            return (
                <li className="list-group-item" key={index}>
                    <h3><a href={url} target="_blank">{result.title}</a></h3>
                    {<p dangerouslySetInnerHTML={this.createMarkup(result.snippet)}></p>}
                    {/*<p> {cleaned}</p>*/}
                    <p>Number of words: {result.wordcount}</p>
                </li>
            );
        });
        return (
            <ul className="list-group">
                {resultsList}
            </ul>
        );
    }
});

export default DisplayResults;
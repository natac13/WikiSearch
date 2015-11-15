import React, { createClass } from 'react';

const DisplayResults = createClass({
    createMarkup(x) { return {__html: x}; },


    render() {
        const resultsList = this.props.results.map((result, index) => {
            // let regex = /(?:<\/?span>?)\s?(?:class="searchmatch">)?/g;
            // let cleaned = result.snippet.replace(regex, '');
            // console.log(cleaned);
            return (
                <li className="list-group-item" key={index}>
                    <h3>{result.title}</h3>
                    {<p dangerouslySetInnerHTML={this.createMarkup(result.snippet)}></p>}
                    {/*<p> {cleaned}</p>*/}
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
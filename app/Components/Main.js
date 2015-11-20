import React, { createClass } from 'react';

const Main = createClass({
    render() {
        return (
            <div className="container">
                <header>
                    <h1>Natac's Wiki Search</h1>
                    <a href="https://github.com/natac13/WikiSearch"
                        target="_blank" title="Source Code">Project Source Code
                    </a>
                </header>
                {this.props.children}
            </div>
        );
    }
});

export default Main;
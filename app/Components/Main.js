import React, { createClass } from 'react';

const Main = createClass({
    render() {
        return (
            <div className="container">
                <header>
                    <h1>Natac's Wiki Search</h1>
                </header>
                {this.props.children}
            </div>
        );
    }
});

export default Main;
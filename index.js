import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import { product } from './check';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Hello, World</div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
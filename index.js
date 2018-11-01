import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import Check from './src/check';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const product = new Check();
        product.add({title: 'product1', price: 10, count: 2});
        product.add({title: 'product2', price: 30, count: 2});

        return (
            <div>
            {
                <p>count is {product.productCount} sum is {product.sumCount} titles are {product.productTitles}</p>  
            }
            </div>
         );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
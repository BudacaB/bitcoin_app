import React from 'react';
import ReactDOM from 'react-dom';
import CryptoList from './CryptoList';

const App = () => {
    return (
        <div><CryptoList /></div>
    );
}


// https://api.iextrading.com/1.0/stock/market/crypto


ReactDOM.render(<App />, document.querySelector('#root'));
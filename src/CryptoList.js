import React from 'react';
import axios from 'axios';
import Crypto from './Crypto';

class CryptoList extends React.Component {
    state = { currencies: [] };

    componentDidMount() {
        axios.get('https://api.iextrading.com/1.0/stock/market/crypto')
        .then(response => {
            console.log(response);
            let currencyTemplates = response.data.map((crypto, index) => {
                return <div key={index}>
                    <Crypto item={crypto} />
                </div>
            });
            this.setState({ currencies: currencyTemplates})
        });
    }
        
    render () {
        return (
            <div>{this.state.currencies}</div>
        );
    }
    
}


export default CryptoList;
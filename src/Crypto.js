import React from 'react';
import './Crypto.css';

const Crypto = (props) => {
    return (
        <div>
            <h1>{props.item.companyName}</h1>
            <h3>{props.item.symbol}</h3>
            <h4 className='price'>Latest Price: {props.item.latestPrice}</h4>
            <h5 className="time">Latest Time: {props.item.latestTime}</h5>
            <hr></hr>
        </div>
    );
}



export default Crypto;
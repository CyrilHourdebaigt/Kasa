import React from 'react';
import './Banner.scss';

const Banner = () => {
    return (
        <div className="banner" style={{ backgroundImage: `url(/images/PhotoMer.png)` }}>
            <div className="overlay"></div>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;
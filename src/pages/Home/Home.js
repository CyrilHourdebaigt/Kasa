import React from 'react';
import Banner from '../../components/Banner/Banner';
import LogementsList from '../../components/LogementList/LogementsList';

const Home = () => {
    return (
        <div>
            <div className='main-content'>
            <Banner />
            <LogementsList />
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Logement from './pages/Logement/Logement';
import Error from './pages/Error/Error';
import './assets/styles/App.scss';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="*" element={<Error />} />
                <Route path="logement/:id" element={<Logement />} />
            </Route>
        </Routes>
    );
};

export default App;
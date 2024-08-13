import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
      return (
            <header className="header">
                  <nav>
                        <div className="logo">
                              <img src="/images/Logo.png" alt="Kasa Logo" />
                        </div>
                        <ul>
                              <li>
                                    <Link to="/">Accueil</Link>
                              </li>
                              <li>
                                    <Link to="/About">A Propos</Link>
                              </li>
                        </ul>
                  </nav>
            </header>
      );
};

export default Header;

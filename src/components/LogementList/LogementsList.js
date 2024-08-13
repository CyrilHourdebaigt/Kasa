import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/logements.json';
import Card from '../Card/Card';
import './LogementsList.scss';

const LogementsList = () => {
  return (
    <div className="borderCards">
      <div className="logements-list">
        {data.map(logement => (
          <Link to={`/logement/${logement.id}`} key={logement.id}>
            <Card
              title={logement.title}
              cover={logement.cover}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LogementsList;
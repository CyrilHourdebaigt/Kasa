import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logements from '../../data/logements.json';
import Slideshow from '../../components/Slideshow/Slideshow';
import Collapse from '../../components/Collapse/Collapse';
import './Logement.scss';

const Logement = () => {
      const { id } = useParams();
      const navigate = useNavigate();
      const logement = logements.find((l) => l.id === id);

      useEffect(() => {
            if (!logement) {
                  navigate('/Error');
            }
      }, [logement, navigate]);

      if (!logement) {
            
            return null;
      }

      
      const stars = Array(5)
            .fill('☆')
            .map((star, index) => (index < logement.rating ? '★' : star));

      return (
            <div className="logement-page">
                  <Slideshow pictures={logement.pictures} />
                  <div className="logement-header">
                        <div className="logement-info">
                              <h1>{logement.title}</h1>
                              <h2>{logement.location}</h2>
                              <div className="logement-tags">
                                    {logement.tags.map((tag) => (
                                          <span
                                                key={tag}
                                                className="logement-tag"
                                          >
                                                {tag}
                                          </span>
                                    ))}
                              </div>
                        </div>
                        <div className="logement-host">
                              <div className="host-info">
                                    <div className="host-name">
                                          <p>{logement.host.name}</p>
                                    </div>
                                    <img
                                          src={logement.host.picture}
                                          alt={logement.host.name}
                                          className="host-picture"
                                    />
                              </div>
                              <div className="logement-rating">
                                    {stars.map((star, index) => (
                                          <span key={index} className="star">
                                                {star}
                                          </span>
                                    ))}
                              </div>
                        </div>
                  </div>
                  <div className="style-collapse">
                        <Collapse title="Description">
                              <p>{logement.description}</p>
                        </Collapse>
                        <Collapse title="Équipements">
                              <ul>
                                    {logement.equipments.map(
                                          (equipment, index) => (
                                                <li key={index}>{equipment}</li>
                                          )
                                    )}
                              </ul>
                        </Collapse>
                  </div>
            </div>
      );
};

export default Logement;

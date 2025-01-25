import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBed, FaBath, FaRuler, FaMapMarkerAlt } from 'react-icons/fa';
import PropertySearch from './PropertySearch';
import propertyData from '../../db.json';


const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = () => {
    setProperties(propertyData.properties);
    setLoading(false);
  };

  const filteredProperties = properties
    .filter(prop => filter === 'all' || prop.type === filter)
    .filter(prop =>
      prop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prop.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prop.price.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <motion.div
      className="properties-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="properties-header">
        <h2>Properties</h2>
        <PropertySearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Properties
          </button>
          <button
            className={`filter-btn ${filter === 'sale' ? 'active' : ''}`}
            onClick={() => setFilter('sale')}
          >
            For Sale
          </button>
          <button
            className={`filter-btn ${filter === 'rent' ? 'active' : ''}`}
            onClick={() => setFilter('rent')}
          >
            For Rent
          </button>
        </div>
      </div>

      <div className="properties-grid">
        <AnimatePresence>
          {filteredProperties.map(property => (
            <motion.div
              key={property.id}
              className="property-card"
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="property-image">
                <img src={property.image} alt={property.name} />
              </div>
              <div className="property-info">
                <h3>{property.name}</h3>
                <p className="location">
                  <FaMapMarkerAlt /> {property.location}
                </p>
                <p className="price">{property.price}</p>
                <div className="property-stats">
                  <span><FaBed /> {property.beds} beds</span>
                  <span><FaBath /> {property.baths} baths</span>
                  <span><FaRuler /> {property.sqft} sqft</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Properties;

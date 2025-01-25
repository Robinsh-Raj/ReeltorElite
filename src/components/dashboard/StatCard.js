import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ title, value, icon: Icon }) => {
  return (
    <motion.div 
      className="stat-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {Icon && <Icon className="stat-icon" />}
      <div className="stat-content">
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </motion.div>
  );
};

export default StatCard;

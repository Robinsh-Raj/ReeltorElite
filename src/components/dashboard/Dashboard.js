import React, { useState, useEffect } from 'react';
import StatCard from './StatCard';
import Chart from './Chart';
import { motion } from 'framer-motion';
import { FaHome, FaDollarSign, FaChartLine, FaKey } from 'react-icons/fa';
import dashboardData from '../../db2.json';

const Dashboard = ({ activeView = 'overview' }) => {
  const [data, setData] = useState(dashboardData.initialData);

  useEffect(() => {
    if (activeView === 'properties') {
      setData(dashboardData.propertiesData);
    } else {
      fetchDashboardData(activeView);
    }
  }, [activeView]);

  const fetchDashboardData = (view) => {
    setData(dashboardData.mockData[view]);
  };

  return (
    <motion.div
      className="dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>{activeView.charAt(0).toUpperCase() + activeView.slice(1)} Dashboard</h2>
      <div className="stats-grid">
        {Object.entries(data.stats).map(([key, value], index) => (
          <StatCard
            key={index}
            title={key}
            value={value}
            icon={key.includes('Properties') ? FaHome : key.includes('Revenue') ? FaDollarSign : FaChartLine}
          />
        ))}
      </div>
      <Chart section={activeView} data={data.chartData} />
    </motion.div>
  );
};

export default Dashboard;

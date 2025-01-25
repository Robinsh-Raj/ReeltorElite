import React, { useState } from 'react';
import { FaHome, FaChartBar, FaKey, FaDollarSign } from 'react-icons/fa';

const Sidebar = ({ setActiveView, activeView }) => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const navItems = [
    {
      id: 'dashboard',
      icon: <FaChartBar />,
      label: 'Dashboard',
      subItems: ['overview', 'sales', 'rentals']
    },
    {
      id: 'properties',
      icon: <FaHome />,
      label: 'Properties'
    }
  ];

  const handleNavItemClick = (itemId) => {
    if (itemId === 'dashboard') {
      setIsDashboardOpen(!isDashboardOpen);
    } else {
      setActiveView(itemId);
      setIsDashboardOpen(false);
    }
  };

  const handleSubItemClick = (subItem) => {
    setActiveView(subItem);
  };

  return (
    <nav className="sidebar">
      {navItems.map(item => (
        <div key={item.id} className="nav-item-container">
          <button
            className={`nav-item ${item.id === activeView ? 'active' : ''}`}
            onClick={() => handleNavItemClick(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
          
          {item.id === 'dashboard' && isDashboardOpen && (
            <div className="sub-menu">
              {item.subItems.map(subItem => (
                <button
                  key={subItem}
                  className={`sub-item ${activeView === subItem ? 'active' : ''}`}
                  onClick={() => handleSubItemClick(subItem)}
                >
                  {subItem.charAt(0).toUpperCase() + subItem.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Sidebar;

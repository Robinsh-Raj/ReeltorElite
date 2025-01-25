import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import Properties from './components/properties/Properties';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

const App = () => {
  const [activeView, setActiveView] = useState('overview');

  return (
    <ThemeProvider>
      <Layout setActiveView={setActiveView} activeView={activeView}>
        {activeView === 'properties' ? (
          <Properties />
        ) : (
          <Dashboard activeView={activeView} />
        )}
      </Layout>
    </ThemeProvider>
  );
};

export default App;

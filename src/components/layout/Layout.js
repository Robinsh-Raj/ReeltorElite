import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children, setActiveView, activeView }) => {
  return (
    <div className="layout">
      <Sidebar setActiveView={setActiveView} activeView={activeView} />
      <main className="main-content">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;

import React from 'react';
import Footer from '../SE-Project/src/components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        {/* This will render the nested routes */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Outlet />
     
    </div>
  );
}

export default Layout;
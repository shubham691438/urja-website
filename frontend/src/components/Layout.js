import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import BottomNav from './BootomNav';
import { Outlet } from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader';

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 1-second loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
          }}
        >
          <HashLoader color="#36d7b7" loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader" />
        </div>
      ) : (
        <>
          <Navbar />
          <Outlet />
          <BottomNav />
        </>
      )}
    </>
  );
};

export default Layout;

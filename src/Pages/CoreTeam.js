import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/footer';
import Cards from '../components/cards.js';
import Data from '../components/data.json';
import { Typography } from '@mui/material';

export default function CoreTeam() {
  const cardStyle = {
    width: "18rem",
    marginLeft: "4rem",
    marginTop: "2rem",
    height: "25rem", // Set a fixed height for the card
  };

  const imageContainerStyle = {
    height: "500px", // Set a specific height for the image container
    overflow: "hidden", // Hide any overflow content
  };

  const imageStyle = {
    width: "100%", // Ensure the image spans the entire width of its container
  };

  const navbarStyle = {
    position: 'fixed',
    top: '0',
    width: '100%',
    backgroundColor: '#fff',
    zIndex: '100',
  };

  return (
    <div>
      <div style={navbarStyle}>
        <Navbar />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography sx={{
          fontWeight: 'bold',
          fontSize: '3rem', // Adjust the font size as needed
          flexDirection: 'column', // Stack text vertically
          textAlign: 'center', // Center text horizontally
          color: 'black',
          fontFamily: 'Chicle, cursive',
        }}>
          <img
            src="/images/urja_logo1.png" // Replace with your image URL
            alt="Your Image"
            style={{ width: '200px', height: '200px', marginBottom: '20px' }}
          />
          <br />
          URJA Core Team Members
          <br />
          NIT Jamshedpur
        </Typography>
      </div>

      <div className="scrollable-content container" style={{ marginTop: "4rem", display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
    backgroundColor:"white" }}>
        {Data.map((cards, index) => (
          <Cards
            key={index} // Make sure to provide a unique key for each component
            img={cards.img}
            Name={cards.Name}
            description={cards.description}
          />
        ))}
      </div>

      <Footer />

    </div>
  );
}

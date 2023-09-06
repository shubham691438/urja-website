import React from 'react';
import '../assets/styles/sports.css';

const SportsHeader = ({ heading }) => {
  const letters = heading.split(''); // Split the heading string into an array of characters

  return (
    <>
      <div className="row mb-5">
        <div className="col-lg-12 d-flex justify-content-center">
          <div className="waviy">
            {letters.map((letter, index) => (
              <span key={index} style={{ '--i': index + 1 }}>
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SportsHeader;







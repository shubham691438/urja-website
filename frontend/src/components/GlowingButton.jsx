import React from 'react';
import '../assets/styles/glowingButtonStyle.css';
import { Link } from 'react-router-dom';

const buttonStyles = {
  '--color1': '#1e9bff',
  '--color2': '#ff1867',
  '--color3': '#6eff3e',
};

const GlowingButton = ({text,toLink}) => {
  return (
    <div className='mt-3'>
        <Link to={toLink}>
            <button style={{ '--clr': '#39FF14' }}>
                <span>{text}</span>
                <i></i>
            </button>
        </Link>
    </div>    
  );
};

export default GlowingButton;

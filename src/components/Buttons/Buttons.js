import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Buttons.css';

const Buttons = () => {
  const { correo } = useParams();
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleButtonMouseEnter = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleButtonMouseLeave = () => {
    setSelectedButton(null);
  };

  return (
    <div className="buttons-container">
<Link to={`/Mecanicos/${correo}`}
        className={`button ${selectedButton === 'Mecanicos' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('Mecanicos')}
        onMouseEnter={() => handleButtonMouseEnter('Mecanicos')}
        onMouseLeave={handleButtonMouseLeave}
      >
        Mecánicos
      </Link>
      <Link
        to="/Servicios"
        className={`button ${selectedButton === 'Servicios' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('Servicios')}
        onMouseEnter={() => handleButtonMouseEnter('Servicios')}
        onMouseLeave={handleButtonMouseLeave}
      >
        Servicios
      </Link>
    </div>
  );
}

export default Buttons;

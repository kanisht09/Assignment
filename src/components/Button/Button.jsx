import React from 'react';
import './Button.css';

function Button({ inverted, title, onClick }) {
  return (
    <div
      className={`custom-button ${inverted ? 'inverted' : 'non-inverted'}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
}

export default Button;

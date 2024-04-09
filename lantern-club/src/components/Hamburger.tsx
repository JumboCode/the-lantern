import React, { useState } from 'react';

interface HamburgerMenuProps {
  onToggle: () => void;
}

const Hamburger: React.FC<HamburgerMenuProps> = ({ onToggle }) => {
  return (
    <button onClick={onToggle} aria-label="Toggle menu" className="hamburger-menu">
      &#9776;
    </button>
  );
};

export default Hamburger;
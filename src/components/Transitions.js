import React from 'react';
import './PageTransition.css'; // Import your CSS file for page transitions

const PageTransition = ({ children }) => {
  return <div className="fade-in">{children}</div>;
};

export default PageTransition;

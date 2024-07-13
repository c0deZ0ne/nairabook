import React from 'react';

const Error404 = () => {
  return (
    <div className="error-404-container">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="100%" fill="#E9F1F7" />

        <circle cx="150" cy="100" r="40" fill="#FFD200" />
        <polygon points="210,170 370,270 295,220" fill="#F3A712" />

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#7D7D7D"
          fontSize="80"
          fontWeight="bold"
        >
          404
        </text>
        <text
          x="50%"
          y="60%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#7D7D7D"
          fontSize="20"
        >
          Page Not Found
        </text>

        <line
          x1="250"
          y1="100"
          x2="250"
          y2="200"
          stroke="#7D7D7D"
          strokeWidth="20"
        />
        <circle cx="250" cy="80" r="10" fill="#FFB6B6" />
      </svg>{' '}
      <div className="error-404-text">
        <h1>Oops...!</h1>
        <p>The page you are looking for does not exist!.</p>
      </div>
    </div>
  );
};

export default Error404;

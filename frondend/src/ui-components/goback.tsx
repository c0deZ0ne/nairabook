import React from 'react';
import { useNavigate } from 'react-router-dom';
import { allIcons } from '../assets/icons';
const GoBackButton = ({ text = 'Go Back' }) => {
  const history = useNavigate();

  return (
    <div
      onClick={() => history(-1)}
      className="flex flex-row items-center cursor-pointer"
    >
      {allIcons.goBackIcon({})}
    </div>
  );
};

export default GoBackButton;

import { useLocation } from 'react-router-dom';

const usePath = () => {
  const location = useLocation();
  const arrayPath = location.pathname.split('/');
  const current = arrayPath[arrayPath.length - 1];
  return current;
};

export default usePath;

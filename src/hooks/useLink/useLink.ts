import { useLocation } from 'react-router-dom';

const useLink = (path: string) => {
  const { pathname: currentLink } = useLocation();
  const isActive = currentLink === path;
  const currentPage = path.slice(1);

  return {
    isActive,
    currentPage,
  };
};

export default useLink;

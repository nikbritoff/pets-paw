import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';

type PortalProps = {
  children: ReactNode;
};

const Portal = ({ children }: PortalProps): JSX.Element => {
  const element = document.createElement('div');
  useEffect(() => {
    document.body.appendChild(element);

    return () => {
      document.body.removeChild(element);
    };
  });

  // return (
  //   <div>
  //     {children}
  //   </div>
  // );

  return ReactDOM.createPortal(children, element);
};

export default Portal;

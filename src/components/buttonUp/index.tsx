import { useEffect, useState } from 'react';

import ReactDOM from 'react-dom';

import { Button, Svg } from './styles';

export const ButtonUp = () => {
  const [showBtn, setShowBtn] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onScrollY = () => {
      return window.scrollY > 700 ? setShowBtn(true) : setShowBtn(false);
    };

    window.addEventListener('scroll', onScrollY);

    return () => window.removeEventListener('scroll', onScrollY);
  }, []);

  return showBtn
    ? ReactDOM.createPortal(
        <Button onClick={scrollTop}>
          <Svg />
        </Button>,
        document.getElementById('root') as HTMLElement
      )
    : null;
};

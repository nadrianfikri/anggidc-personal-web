import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [bodyOffset, setBodyOffset] = useState({
    top: 0,
    left: 0,
  });

  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollX, setScrollX] = useState<number>(0);
  const [scrollDirection, setScrollDirection] = useState<string>('down');

  const handleScroll = () => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(scrollPosition > -bodyOffset.top ? 'down' : 'up');
    setScrollPosition(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection,
  };
};

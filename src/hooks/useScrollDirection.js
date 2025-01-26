import { useState, useEffect } from 'react';

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll <= 0) {
        setScrollDirection("up");
        return;
      }

      if (Math.abs(currentScroll - prevScroll) < 10) {
        return;
      }

      const direction = currentScroll > prevScroll ? "down" : "up";
      setScrollDirection(direction);
      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return scrollDirection;
}

export default useScrollDirection; 
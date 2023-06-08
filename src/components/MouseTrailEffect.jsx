import React, { useRef, useEffect } from 'react';
//import './MouseTrail.css'; // Import CSS file for styling

const MouseTrail = () => {
  const trailRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (event) => {
      const trail = trailRef.current;
      const { clientX, clientY } = event;

      // Update the position of the trail element
      trail.style.left = `${clientX}px`;
      trail.style.top = `${clientY}px`;
    };

    const onTouchMove = (event) => {
      const trail = trailRef.current;
      const { touches } = event;

      if (touches.length === 1) {
        const { clientX, clientY } = touches[0];

        // Update the position of the trail element
        trail.style.left = `${clientX}px`;
        trail.style.top = `${clientY}px`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return <div className="mouse-trail" ref={trailRef}></div>;
};

export default MouseTrail;

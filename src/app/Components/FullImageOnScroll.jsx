import React, { useRef, useEffect, useState } from 'react';

const FullImageOnScroll = () => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const top = imageRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ height: '1000px' }}> {/* Add enough height to allow scrolling */}
      <div style={{ height: '100vh', overflow: 'auto' }}> {/* Container for scrolling */}
        <div style={{ height: '200vh' }}> {/* Add more height to allow scrolling */}
          <div ref={imageRef} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHcrTGqtWWHxCKaE1LWGaK08cw1rVxLX0vUvvVr_yEw&s" alt="Full Image" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullImageOnScroll;

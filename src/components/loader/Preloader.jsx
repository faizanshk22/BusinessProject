import React, { useEffect, useState } from 'react';
import './preloader.scss';
import Loader from '/ONSETSLOGO2.png';

function Preloader() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length === 3 ? '' : prev + '.'));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="preloader">
      <div className="load">
        <img src={Loader} alt="Loader" />
        <h1>Loading{dots}</h1>
      </div>
    </div>
  );
}

export default Preloader;

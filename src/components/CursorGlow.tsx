
import { useEffect, useState } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };


    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(145, 69, 254, 0.4) 0%, rgba(145, 69, 254, 0) 60%)',
        boxShadow: '0 0 40px 20px rgba(145, 69, 254, 0.5)',
      }}
    />
  );
};

export default CursorGlow;

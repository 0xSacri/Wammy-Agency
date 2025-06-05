
import { useEffect, useState } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        width: '2px',
        height: '2px',
        borderRadius: '50%',
        backgroundColor: 'rgba(145, 69, 254, 0.2)',
        boxShadow: '0 0 24px 12px rgba(145, 69, 254, 0.5)',
      }}
    />
  );
};

export default CursorGlow;

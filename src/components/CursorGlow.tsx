
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
        width: '1px',
        height: '1px',
        borderRadius: '50%',
        backgroundColor: 'transparent',
        boxShadow: '0 0 12px 6px rgba(145, 69, 254, 0.3)',
      }}
    />
  );
};

export default CursorGlow;

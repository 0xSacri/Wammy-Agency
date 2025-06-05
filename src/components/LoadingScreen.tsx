
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-twitch mb-8 animate-pulse-glow">
          Wammy's Agency
        </h1>
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 rounded-full border-4 border-twitch/20"></div>
          <div
            className="absolute inset-0 rounded-full border-4 border-t-transparent border-r-transparent border-b-transparent border-twitch animate-spin"
            style={{
              filter: 'drop-shadow(0 0 20px #9145FE)',
              animationDuration: '1.5s'
            }}
          ></div>
        </div>
        <div className="mt-4 text-twitch/60 text-sm">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

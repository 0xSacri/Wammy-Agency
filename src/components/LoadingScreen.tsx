
import { useState, useEffect } from 'react';
import { LoaderCircle } from 'lucide-react';

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
        <div className="relative">
          <LoaderCircle 
            className="w-16 h-16 text-twitch animate-spin mx-auto" 
            style={{
              filter: 'drop-shadow(0 0 20px #9145FE)',
            }}
          />
          <div className="absolute inset-0 w-16 h-16 rounded-full bg-twitch/20 blur-xl animate-pulse mx-auto"></div>
        </div>
        <div className="mt-4 text-twitch/60 text-sm">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

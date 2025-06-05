
import { Button } from '@/components/ui/button';

interface HomeProps {
  onEnter: () => void;
}

const Home = ({ onEnter }: HomeProps) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-twitch/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-twitch/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="text-center z-10">
        <h1 className="text-7xl font-bold text-white mb-4 animate-slide-up">
          <span className="text-twitch">Wammy's</span>{" "}
          <span className="text-twitch">Agency</span>
        </h1>
        <p className="text-gray-400 text-xl mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Elite Twitch Partnership Solutions
        </p>
        <Button
          onClick={onEnter}
          className="bg-twitch hover:bg-twitch-dark text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_80px_#9145FE] animate-slide-up"
          style={{
            animationDelay: '0.4s',
            boxShadow: '0 0 30px #9145FE40'
          }}
        >
          Twitch Services
        </Button>
      </div>
    </div>
  );
};

export default Home;

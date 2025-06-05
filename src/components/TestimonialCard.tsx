
import { RevenuePoint } from './RevenueChart';

interface TestimonialCardProps {
  name: string;
  testimonial: string;
  earnings: string;
  imageLeft: boolean;
  showConnector?: boolean;
  streamData?: RevenuePoint[];
  stats: { moneyEarned: number; increasePercent: number };
  adsWithoutUs: number;
}

const TestimonialCard = ({
  name,
  testimonial,
  earnings,
  imageLeft,
  showConnector = true,
  streamData,
  stats,
  adsWithoutUs
}: TestimonialCardProps) => {
  const chartData =
    streamData ||
    Array.from({ length: 30 }, (_, i) => ({
      date: `Day ${i + 1}`,
      revenue: 800 + i * 20 + Math.round(Math.sin(i / 3) * 100)
    }));

  const progress = Math.min(100, (stats.moneyEarned / 2000) * 100);
  const withoutUsFormatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(adsWithoutUs);
  const adIncreasePercent = Math.round(
    ((stats.moneyEarned - adsWithoutUs) / adsWithoutUs) * 100
  );

  return (
    <div className="relative py-16">
      <div className={`flex flex-col lg:flex-row items-center gap-12 ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        {/* Dashboard Screenshot */}
        <div className="flex-1 relative">
          <div className="bg-gray-900 rounded-lg p-4 border border-twitch/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-twitch/10 to-transparent"></div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-400 text-sm ml-4">Twitch Creator Dashboard</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Ads revenues</span>
                  <span className="text-twitch font-bold text-xl">{earnings}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-twitch h-2 rounded-full animate-pulse-glow"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Ad Revenue</div>
                    <div className="text-green-400 font-semibold">+{adIncreasePercent}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Ads revenues without us</div>
                    <div className="text-blue-400 font-semibold">{withoutUsFormatted}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="flex-1 text-center lg:text-left">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-twitch/20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-twitch/5 to-transparent rounded-lg"></div>
            <div className="relative">
              <div className="text-6xl text-twitch/30 mb-4">"</div>
              <p className="text-gray-300 text-lg mb-6 italic leading-relaxed">
                {testimonial}
              </p>
              <div className="text-twitch font-semibold text-xl">
                — {name}
              </div>
              <div className="text-gray-400 text-sm">
                Twitch Partner
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connector Line */}
      {showConnector && (
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
          <div className="w-1 h-16 bg-gradient-to-b from-twitch to-transparent opacity-60">
            <div className="w-full h-full bg-twitch animate-pulse blur-sm"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;

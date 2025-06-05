
import { RevenuePoint } from './RevenueChart';
import StreamStatsDialog from './StreamStatsDialog';

interface TestimonialCardProps {
  name: string;
  testimonial: string;
  earnings: string;
  imageLeft: boolean;
  imageSrc?: string;
  showConnector?: boolean;
  streamData?: RevenuePoint[];
  stats: { moneyEarned: number; increasePercent: number };
  adsWithoutUs: number;
  popupStats?: {
    data: RevenuePoint[];
    totalStreams: number;
    totalHours: number;
    totalRevenue: number;
  };
}

const TestimonialCard = ({
  name,
  testimonial,
  earnings,
  imageLeft,
  imageSrc,
  showConnector = true,
  streamData,
  stats,
  adsWithoutUs,
  popupStats
}: TestimonialCardProps) => {
  const chartData =
    streamData ||
    Array.from({ length: 30 }, (_, i) => ({
      date: `Day ${i + 1}`,
      revenue: 800 + i * 20 + Math.round(Math.sin(i / 3) * 100)
    }));

  const progress = Math.min(100, (stats.moneyEarned / 2000) * 100);
  const withoutUsProgress = Math.min(100, (adsWithoutUs / 2000) * 100);
  const withoutUsFormatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(adsWithoutUs);
  const adIncreasePercent = Math.round(
    ((stats.moneyEarned - adsWithoutUs) / adsWithoutUs) * 100
  );
  const withUsProgress = Math.max(0, progress - withoutUsProgress);

  return (
    <div className="relative py-16">
      <div className={`flex flex-col lg:flex-row items-center gap-12 ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        {/* Dashboard Screenshot */}
        <div className="flex-1 relative">
          {popupStats ? (
            <StreamStatsDialog
              data={popupStats.data}
              totalStreams={popupStats.totalStreams}
              totalHours={popupStats.totalHours}
              totalRevenue={popupStats.totalRevenue}
              trigger={
                <div className="bg-gray-900 rounded-2xl p-4 border border-gray-700 shadow-lg relative overflow-hidden cursor-pointer">
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
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden flex">
                        <div
                          className="bg-yellow-500 h-2 animate-pulse-glow"
                          style={{ width: `${withoutUsProgress}%` }}
                        ></div>
                        <div
                          className="bg-twitch h-2 animate-pulse-glow"
                          style={{ width: `${withUsProgress}%` }}
                        ></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-gray-400">Ad Revenue</div>
                          <div className="text-green-400 font-semibold">+{adIncreasePercent}%</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Ads revenues without us</div>
                          <div className="text-yellow-500 font-semibold">{withoutUsFormatted}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
          ) : (
            <div className="bg-gray-900 rounded-2xl p-4 border border-gray-700 shadow-lg relative overflow-hidden">
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
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden flex">
                    <div
                      className="bg-yellow-500 h-2 animate-pulse-glow"
                      style={{ width: `${withoutUsProgress}%` }}
                    ></div>
                    <div
                      className="bg-twitch h-2 animate-pulse-glow"
                      style={{ width: `${withUsProgress}%` }}
                    ></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Ad Revenue</div>
                      <div className="text-green-400 font-semibold">+{adIncreasePercent}%</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Ads revenues without us</div>
                      <div className="text-yellow-500 font-semibold">{withoutUsFormatted}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Testimonial */}
        <div className="flex-1 text-center lg:text-left">
          <div
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/70 shadow-lg relative transition-all duration-300 transform-gpu [transform:perspective(1000px)] hover:shadow-2xl hover:[transform:perspective(1000px)_rotateY(5deg)_rotateX(2deg)_translateY(-0.25rem)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-twitch/5 to-transparent rounded-2xl"></div>
            <div className="relative">
              <div className="text-6xl text-twitch/30 mb-4">"</div>
              <p className="text-gray-300 text-lg mb-6 italic leading-relaxed">
                {testimonial}
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4 mt-6">
                {imageSrc && (
                  <img
                    src={imageSrc}
                    alt={`${name} avatar`}
                    className="w-16 h-16 rounded-full object-cover filter blur-sm ring-2 ring-gray-300/70 animate-glow"
                  />
                )}
                <div>
                  <div className="text-twitch font-semibold text-xl">— {name}</div>
                  <div className="text-gray-400 text-sm">Twitch Partner</div>
                </div>
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

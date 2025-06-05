
import AnimatedCounter from '@/components/AnimatedCounter';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';

const TOTAL_GENERATED = 101_127;
const STREAMERS_COLLABORATED = 97;

import type { RevenuePoint } from '@/components/RevenueChart';

const createData = (values: number[]): RevenuePoint[] =>
  values.map((revenue, i) => ({ date: `Day ${i + 1}`, revenue }));

const streamer1Data = createData([
  100, 223, 0, 245, 0, 0, 167, 172, 118, 0, 0, 105, 161, 0, 134,
  101, 106, 130, 0, 0, 0, 0, 0, 122, 133, 0, 0, 0, 98, 0
]);

const streamer2Data = createData([
  0, 146, 0, 122, 0, 103, 0, 0, 112, 0, 0, 108, 0, 0, 115,
  113, 0, 0, 100, 101, 0, 0, 0, 0, 109, 0, 0, 100, 0, 0
]);

const streamer3Data = createData([
  0, 109, 118, 115, 106, 0, 110, 122, 0, 106, 117, 0, 124, 100, 0,
  116, 117, 103, 110, 0, 102, 111, 0, 103, 107, 0, 0, 102, 118, 108
]);

const streamer4Data = createData([
  0, 113, 0, 107, 114, 0, 0, 108, 0, 115, 117, 0, 0, 108, 103,
  0, 0, 101, 102, 101, 0, 116, 0, 0, 0, 0, 0, 0, 115, 110
]);

const createPopupStats = (data: RevenuePoint[]) => {
  const totalStreams = data.filter((d) => d.revenue > 0).length;
  const totalRevenue = data.reduce((sum, d) => sum + d.revenue, 0);
  const totalHours = totalStreams * 3;
  return { data, totalStreams, totalHours, totalRevenue };
};

interface ServicesProps {
  onBackHome?: () => void;
}

const testimonialData = [
  {
    name: "XXXXX",
    testimonial: "Working with Wammy's Agency has been a game-changer for my streaming career. They helped me increase my ad revenue by 400% while maintaining my authentic content style.",
    earnings: "$2,115",
    adsWithoutUs: 159,
    imageSrc: "/streamers/FlannelJax.png",
    imageLeft: true,
    streamData: streamer1Data,
    stats: { moneyEarned: 2115, increasePercent: 400 },
    popupStats: createPopupStats(streamer1Data)
  },
  {
    name: "XXXXX",
    testimonial: "The professionalism and results speak for themselves. In just 3 months, I went from struggling to pay bills to having a stable income from streaming.",
    earnings: "$1,229",
    adsWithoutUs: 120,
    imageSrc: "/streamers/Rafsou.png",
    imageLeft: false,
    streamData: streamer2Data,
    stats: { moneyEarned: 1229, increasePercent: 350 },
    popupStats: createPopupStats(streamer2Data)
  },
  {
    name: "XXXXX",
    testimonial: "I was skeptical at first, but Wammy's delivered exactly what they promised. The ad optimization strategies they implemented are incredible.",
    earnings: "$2,324",
    adsWithoutUs: 95,
    imageSrc: "/streamers/soldier",
    imageLeft: true,
    streamData: streamer3Data,
    stats: { moneyEarned: 2324, increasePercent: 420 },
    popupStats: createPopupStats(streamer3Data)
  },
  {
    name: "XXXXX",
    testimonial: "Finally, an agency that understands Twitch and actually cares about their partners' success. The transparency and support are unmatched.",
    earnings: "$1,530",
    adsWithoutUs: 163,
    imageSrc: "/streamers/yeri.png",
    imageLeft: false,
    streamData: streamer4Data,
    stats: { moneyEarned: 1530, increasePercent: 275 },
    popupStats: createPopupStats(streamer4Data)
  }
];

const Services = ({ onBackHome }: ServicesProps) => {
  const handleContactUs = () => {
    window.open('mailto:contact@wammysagency.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {onBackHome && (
        <Button
          variant="link"
          onClick={onBackHome}
          className="absolute left-4 top-4 text-white"
        >
          Back to home
        </Button>
      )}
      <Button
        onClick={handleContactUs}
        className="absolute right-4 top-4 bg-twitch hover:bg-twitch-dark text-black font-bold py-4 px-12 rounded-lg text-xl transition-all duration-300 hover:scale-105"
        style={{ boxShadow: '0 0 30px #9145FE40' }}
      >
        Contact Us
      </Button>
      {/* Header Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 animate-slide-up">
            Twitch Services
          </h1>
          <p
            className="text-2xl text-gray-300 italic animate-slide-up"
            style={{
              animationDelay: '0.2s'
            }}
          >
            "Earn money just by streaming."
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div
            className="relative text-center p-8 bg-gray-900/30 rounded-2xl border border-gray-700 shadow-lg animate-slide-up animated-border-gradient"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-twitch/5 to-transparent rounded-2xl"></div>
            <div className="relative">
              <div className="text-gray-400 text-lg mb-4">Total Generated</div>
              <AnimatedCounter target={TOTAL_GENERATED} prefix="$" />
              <div className="text-gray-500 text-sm mt-2">For our partners</div>
            </div>
          </div>
          <div
            className="relative text-center p-8 bg-gray-900/30 rounded-2xl border border-gray-700 shadow-lg animate-slide-up animated-border-gradient"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-twitch/5 to-transparent rounded-2xl"></div>
            <div className="relative">
              <div className="text-gray-400 text-lg mb-4">Streamers Collaborated</div>
              <AnimatedCounter target={STREAMERS_COLLABORATED} />
              <div className="text-gray-500 text-sm mt-2">And counting</div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Success Stories
          </h2>
          <p className="text-center text-gray-400 mb-8">
            Our agency's streamers benefit from anonymity clauses.
          </p>
          <div className="space-y-8">
            {testimonialData.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                testimonial={testimonial.testimonial}
                earnings={testimonial.earnings}
                adsWithoutUs={testimonial.adsWithoutUs}
                imageSrc={testimonial.imageSrc}
                imageLeft={testimonial.imageLeft}
                streamData={testimonial.streamData}
                stats={testimonial.stats}
                popupStats={testimonial.popupStats}
                showConnector={index < testimonialData.length - 1}
              />
            ))}
          </div>
        </div>


        {/* Contact Section */}
        <div className="text-center py-16">
          <Button
            onClick={handleContactUs}
            className="bg-twitch hover:bg-twitch-dark text-black font-bold py-4 px-12 rounded-lg text-xl transition-all duration-300 hover:scale-105"
            style={{
              boxShadow: '0 0 30px #9145FE40'
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;

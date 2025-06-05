
import AnimatedCounter from '@/components/AnimatedCounter';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';

const TOTAL_GENERATED = 101_127;
const STREAMERS_COLLABORATED = 97;

import type { RevenuePoint } from '@/components/RevenueChart';

const generateStreams = (offset: number, amp: number): RevenuePoint[] =>
  Array.from({ length: 30 }, (_, i) => ({
    date: `Day ${i + 1}`,
    revenue: Math.max(0, Math.round(Math.sin(i / 3 + offset) * amp + amp))
  }));

interface ServicesProps {
  onBackHome?: () => void;
}

const testimonialData = [
  {
    name: "TechGamer99",
    testimonial: "Working with Wammy's Agency has been a game-changer for my streaming career. They helped me increase my ad revenue by 400% while maintaining my authentic content style.",
    earnings: "$3,200",
    imageLeft: true,
    streamData: generateStreams(1, 3),
    stats: { moneyEarned: 3200, increasePercent: 400 }
  },
  {
    name: "StreamQueen",
    testimonial: "The professionalism and results speak for themselves. In just 3 months, I went from struggling to pay bills to having a stable income from streaming.",
    earnings: "$2,800",
    imageLeft: false,
    streamData: generateStreams(2, 4),
    stats: { moneyEarned: 2800, increasePercent: 350 }
  },
  {
    name: "GamingMaster",
    testimonial: "I was skeptical at first, but Wammy's delivered exactly what they promised. The ad optimization strategies they implemented are incredible.",
    earnings: "$4,100",
    imageLeft: true,
    streamData: generateStreams(0.5, 5),
    stats: { moneyEarned: 4100, increasePercent: 420 }
  },
  {
    name: "RetroStreamer",
    testimonial: "Finally, an agency that understands Twitch and actually cares about their partners' success. The transparency and support are unmatched.",
    earnings: "$2,500",
    imageLeft: false,
    streamData: generateStreams(1.5, 2),
    stats: { moneyEarned: 2500, increasePercent: 275 }
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
          <div className="relative text-center p-8 bg-gray-900/30 rounded-lg border border-twitch/20 animate-slide-up shadow-[0_0_40px_#9145FE80]" style={{ animationDelay: '0.4s' }}>
            <div className="text-gray-400 text-lg mb-4">Total Generated</div>
            <AnimatedCounter target={TOTAL_GENERATED} prefix="$" />
            <div className="text-gray-500 text-sm mt-2">For our partners</div>
          </div>
          <div className="relative text-center p-8 bg-gray-900/30 rounded-lg border border-twitch/20 animate-slide-up shadow-[0_0_40px_#9145FE80]" style={{ animationDelay: '0.6s' }}>
            <div className="text-gray-400 text-lg mb-4">Streamers Collaborated</div>
            <AnimatedCounter target={STREAMERS_COLLABORATED} />
            <div className="text-gray-500 text-sm mt-2">And counting</div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Success Stories
          </h2>
          <div className="space-y-8">
            {testimonialData.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                testimonial={testimonial.testimonial}
                earnings={testimonial.earnings}
                imageLeft={testimonial.imageLeft}
                streamData={testimonial.streamData}
                stats={testimonial.stats}
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

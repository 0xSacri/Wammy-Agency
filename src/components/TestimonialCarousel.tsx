
import { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "StreamerPro",
    text: "Wammy's Agency boosted my revenue by 300% in just two months!"
  },
  {
    name: "GamerElite",
    text: "Professional service and incredible results. Highly recommended!"
  },
  {
    name: "TwitchStar",
    text: "Finally, an agency that delivers on their promises. Amazing work!"
  },
  {
    name: "ContentCreator",
    text: "The best investment I've made for my streaming career."
  },
  {
    name: "DigitalNomad",
    text: "Transparent, efficient, and incredibly effective. 5 stars!"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-16 overflow-hidden">
      <h3 className="text-3xl font-bold text-center text-white mb-12">
        What Our Partners Say
      </h3>
      <div className="relative h-24">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentIndex
                ? 'opacity-100 translate-x-0'
                : index < currentIndex
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="text-center">
              <p className="text-gray-300 text-lg italic mb-4">
                "{testimonial.text}"
              </p>
              <p className="text-twitch font-semibold">— {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-twitch' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;

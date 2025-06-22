import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [visibleChars, setVisibleChars] = useState(0);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [showTagline, setShowTagline] = useState(true);
  const headingText = "Alka Singh";
  const taglines = ["Vlogger", "Poet", "Mountain Lover"];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 200); // slight delay for effect
  }, []);

  useEffect(() => {
    if (showContent && visibleChars < headingText.length) {
      const interval = setInterval(() => {
        setVisibleChars((prev) => prev + 1);
      }, 120); // speed of typing
      return () => clearInterval(interval);
    }
  }, [showContent, visibleChars, headingText.length]);

  useEffect(() => {
    if (!showContent) return;
    const showDuration = 1500; // ms tagline visible
    const hideDuration = 400;  // ms tagline hidden

    let timeout: NodeJS.Timeout;
    if (showTagline) {
      timeout = setTimeout(() => setShowTagline(false), showDuration);
    } else {
      timeout = setTimeout(() => {
        setTaglineIndex((prev) => (prev + 1) % taglines.length);
        setShowTagline(true);
      }, hideDuration);
    }
    return () => clearTimeout(timeout);
  }, [showTagline, taglineIndex, showContent]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Mountain Parallax Layers */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
          alt="Mountain Background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-mountain-dawn/20"></div>
      </div>

      {/* Floating Mountain Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-mountain-peak/20 rounded-full blur-sm"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-mountain-sunset/30 rounded-full blur-sm"></div>
      </div>
<br />
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <br /><br /><br /><br /><br />
        <div
          className={`mb-8 transition-all duration-1000 ${
            showContent
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h1
            className="text-5xl md:text-7xl font-dancing font-bold mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)] bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-600 bg-clip-text text-transparent transition-all duration-1000 delay-200"
          >
            {headingText.slice(0, visibleChars)}
            <span className="animate-pulse">{visibleChars < headingText.length ? "|" : ""}</span>
          </h1>
          <div className="text-xl md:text-2xl font-light mb-6 transition-all duration-1000 delay-500">
            <span
              className={`block transition-all duration-500 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] ${
                showTagline ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              {taglines[taglineIndex]}
            </span>
            <span className="block text-lg md:text-xl mt-2 text-mountain-dawn drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              Nursing Student from Agra
            </span>
          </div>
        </div>

        <div className="space-y-4 mb-12">
          <p className="text-lg md:text-xl text-white/80 font-dancing leading-relaxed">
            "पहाड़ों की गोद में बसे हैं मेरे सपने"
          </p>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Join me on my journey through the mountains, words, and wanderlust. <br />
            Sharing stories from the peaks and poetry from the heart.
          </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#poetry"
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Read My Poetry
          </a>
          <a
            href="#vlogs"
            className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full font-medium hover:bg-white/30 hover:scale-105 transition-all duration-300"
          >
            Watch My Vlogs
          </a>
        </div>
      </div>
      <br />
    
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/80" />
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-sm">
        Scroll down to explore more 
      </div>
    </div>
    </section>
  );
};

export default HeroSection;

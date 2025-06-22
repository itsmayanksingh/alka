
import { useState, useEffect } from 'react';
import { Camera, Instagram, Youtube, MessageCircle, Mountain, Heart, BookOpen, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import PoetrySection from '../components/PoetrySection';
import VlogsSection from '../components/VlogsSection';
import InstagramFeed from '../components/InstagramFeed';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-mountain-dawn via-mountain-mist to-mountain-peak overflow-x-hidden">
      <Navigation />
      
      <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <HeroSection />
        <PoetrySection />
        <VlogsSection />
        <InstagramFeed />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>

      {/* Floating Social Icons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        <a 
          href="https://www.instagram.com/poetry_corner34?utm_source=ig_web_button_share_sheet&igsh=MTljMDhtMjF6aGk2cw==" 
          className="block p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white hover:scale-110 transition-all duration-300 animate-glow"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
        <a 
          href="https://www.youtube.com/@poetic_nurse34/videos" 
          className="block p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full text-white hover:scale-110 transition-all duration-300 animate-glow"
          aria-label="YouTube"
        >
          <Youtube size={20} />
        </a>
       
      </div>
    </div>
  );
};

export default Index;

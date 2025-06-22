
import { Mountain, Heart, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-mountain-peak to-mountain-forest text-white py-16 relative overflow-hidden">
      {/* Animated Mountain Doodles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-float">
          <Mountain className="w-16 h-16" />
        </div>
        <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Mountain className="w-12 h-12" />
        </div>
        <div className="absolute bottom-10 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <Mountain className="w-10 h-10" />
        </div>
        <div className="absolute bottom-16 right-1/3 animate-float" style={{ animationDelay: '3s' }}>
          <Mountain className="w-14 h-14" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Mountain className="w-8 h-8 text-mountain-dawn" />
              <span className="text-2xl font-dancing font-bold">Poetry Corner</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              A nursing student from Agra sharing her journey through mountains, 
              poetry, and travel vlogs. Join me as I explore the world one peak at a time.
            </p>
            <div className="flex items-center space-x-2 text-mountain-dawn">
              <Heart className="w-5 h-5" />
              <span className="font-dancing text-lg">"पहाड़ों से प्यार, दिल में बसा"</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-mountain-dawn">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#poetry" className="text-white/80 hover:text-white transition-colors duration-300">Poetry</a></li>
              <li><a href="#vlogs" className="text-white/80 hover:text-white transition-colors duration-300">Vlogs</a></li>
              <li><a href="#gallery" className="text-white/80 hover:text-white transition-colors duration-300">Gallery</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-mountain-dawn">Follow Me</h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/poetry_corner34?utm_source=ig_web_button_share_sheet&igsh=MTljMDhtMjF6aGk2cw=="
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>poetry_corner34</span>
              </a>
              <a
                href="https://www.youtube.com/@poetic_nurse34/videos"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 group"
              >
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>The poetic nurse</span>
              </a>
              
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 text-sm mb-4 md:mb-0">
              © 2024 Alka Singh. Made with <Heart className="w-4 h-4 inline text-red-400" /> for mountain lovers and poetry enthusiasts.
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>

        {/* Decorative Mountain Range */}
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-20">
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path
              d="M0,60 L200,20 L400,80 L600,30 L800,70 L1000,25 L1200,55 L1200,120 L0,120 Z"
              fill="currentColor"
              className="text-mountain-dawn animate-pulse"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

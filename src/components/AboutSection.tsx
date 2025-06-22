
import { MapPin, Heart, BookOpen, Camera, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80"
          alt="Misty Mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mountain-peak/80 via-mountain-mist/70 to-mountain-dawn/80"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-dancing font-bold mb-8">
              About Alka
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                नमस्ते! I'm Alka Singh, a nursing student from the beautiful city of Agra, 
                where the Taj Mahal stands as a testament to eternal love. But my heart 
                belongs to the mountains – those majestic peaks that call to my soul.
              </p>
              
              <p>
                When I'm not studying anatomy or practicing patient care, you'll find me 
                planning my next mountain adventure or penning down poetry in Hindi that 
                flows straight from my heart. The contrast between the structured world 
                of healthcare and the free-spirited realm of travel and poetry keeps my 
                life beautifully balanced.
              </p>
              
              <p>
                Through my YouTube channel, I share the raw, unfiltered beauty of my 
                travels and the little moments that make life extraordinary. My camera 
                captures not just landscapes, but emotions, stories, and the magic that 
                happens when a small-town girl chases her big mountain dreams.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-mountain-dawn">25K+</div>
                <div className="text-sm text-white/80">YouTube Views</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mountain-dawn">50+</div>
                <div className="text-sm text-white/80">Poems Written</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mountain-dawn">15+</div>
                <div className="text-sm text-white/80">Places Explored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mountain-dawn">3rd</div>
                <div className="text-sm text-white/80">Year Nursing</div>
              </div>
            </div>
          </div>

          {/* About Cards */}
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-mountain-peak mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Uttarakhand</h3>
              </div>
              <p className="text-gray-600">
                Born and raised in the city of love, where the Mountains taught me 
                that beauty lies in details and passion creates timeless art.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 text-mountain-forest mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Nursing Student</h3>
              </div>
              <p className="text-gray-600">
                Pursuing my dream of healing and caring for others while balancing 
                my wanderlust and creative expressions.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-mountain-sunset mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Mountain Lover</h3>
              </div>
              <p className="text-gray-600">
                The mountains are my therapy, my inspiration, and my escape. 
                Every peak tells a story, and I'm here to listen and share.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Hindi Poet</h3>
              </div>
              <p className="text-gray-600">
                Words in Hindi flow from my heart like mountain streams – pure, 
                honest, and carrying the essence of my experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

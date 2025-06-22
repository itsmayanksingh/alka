import { useState } from 'react';
import { BookOpen, Heart } from 'lucide-react';
 import { useEffect } from 'react';

const AnimatedPoetryCard = ({ title, content }: { title: string; content: string }) => {
  const [visibleChars, setVisibleChars] = useState(0);

  // Typewriter effect for poem content
 
  useEffect(() => {
    setVisibleChars(0);
    const interval = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev < content.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [content]);

  return (
    <div className="relative bg-white/90 rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-pink-400 hover:shadow-2xl transition-all duration-500 group overflow-hidden">
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-30 blur-2xl group-hover:scale-110 transition-all duration-500"></div>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-dancing font-bold text-mountain-peak mb-2 animate-fade-in">
          {title}
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
      </div>
      <div className="text-gray-700 leading-relaxed font-poppins min-h-[120px]">
        {content.slice(0, visibleChars)}
        <span className="animate-pulse text-pink-400">{visibleChars < content.length ? "|" : ""}</span>
      </div>
      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-gradient-to-r from-mountain-peak to-mountain-forest text-white rounded-full text-sm hover:shadow-lg transition-all duration-300">
          Read Full Poem
        </button>
      </div>
    </div>
  );
};

const PoetrySection = () => {
  const poems = [
    {
      title: "पहाड़ों का प्यार",
      content: "बर्फीली चोटियों पर,\nमेरे सपनों का बसेरा है।\nहर पत्थर में छुपी है कहानी,\nहर हवा में प्यार का इज़हार है।\n\nयहाँ की शांति में मिलता है सुकून,\nप्रकृति से जुड़ा दिल का रिश्ता है।"
    },
    {
      title: "यात्रा के संगम",
      content: "हर मोड़ पर नया नज़ारा,\nहर कदम में एक कहानी।\nरास्ते सिखाते हैं जीना,\nमंजिल नहीं, सफर है असली।\n\nकैमरे में कैद करती हूँ पल,\nदिल में बसाती हूँ यादें।"
    },
{
  title: "पहाड़ों की पुकार",
  content: "नीले आसमान के नीचे, बर्फ से ढकी चोटी,\nहर सुबह सूरज की किरणों से जगती है घाटी।\nठंडी हवाओं में बसी है सुकून की बात,\nहर पत्थर, हर पेड़ सुनाता है अपनी सौगात।\n\nइन पहाड़ों की गोद में मिलती है शांति अपार,\nमन खो जाता है यहाँ, सुनकर प्रकृति की पुकार।"
}   
  ];

  return (
    <section id="poetry" className="py-20 bg-gradient-to-br from-mountain-mist to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 text-9xl font-dancing text-mountain-peak">❀</div>
        <div className="absolute bottom-20 right-10 text-7xl font-dancing text-mountain-sunset">✿</div>
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-mountain-peak mr-3" />
            
            <h2 className="text-4xl md:text-5xl font-dancing font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              <br />
              कविता दिल से
            </h2>
            <Heart className="w-8 h-8 text-mountain-sunset ml-3" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Words from the heart, inspired by mountains and dreams
          </p>
        </div>
        {/* Poetry Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {poems.map((poem, idx) => (
            <AnimatedPoetryCard key={idx} title={poem.title} content={poem.content} />
          ))}
        </div>
        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
            <BookOpen className="inline-block mr-2" />
            <a href="#" className="text-white">  View All Poetry</a>
   
          </button>
        </div>
      </div>
    </section>
  );
};

export default PoetrySection;

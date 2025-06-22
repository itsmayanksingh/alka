
import { useState, useEffect } from 'react';
import { Instagram, Heart, MessageCircle, Share } from 'lucide-react';

const InstagramFeed = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const posts = [
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
      caption: "Mountain calling और मैं जा रही हूं ✨ #MountainLove #Travel",
      likes: "1,234",
      comments: "67"
    },
    {
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
      caption: "Pine trees और poetry का perfect combination 🌲📝 #PoetryInNature",
      likes: "892",
      comments: "43"
    },
    {
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80",
      caption: "Nursing studies by day, travel dreams by night 👩‍⚕️✈️ #NursingLife",
      likes: "1,567",
      comments: "89"
    },
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
      caption: "आगरा से हिमालय तक का सफर 🏔️❤️ #Wanderlust #Mountains",
      likes: "2,103",
      comments: "134"
    },
    {
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=80",
      caption: "River flowing like my thoughts... 🌊💭 #NatureTherapy",
      likes: "987",
      comments: "52"
    },
    {
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      caption: "Green therapy for the soul 🌿💚 #ForestBathing #Peace",
      likes: "1,445",
      comments: "76"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(posts.length / 3));
    }, 4000);
    return () => clearInterval(timer);
  }, [posts.length]);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-mountain-dawn to-mountain-mist relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="w-10 h-10 text-pink-500 mr-4" />
            <h2 className="text-4xl md:text-5xl font-dancing font-bold text-gradient">
              Instagram Stories
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Daily moments from my adventures and poetry sessions
          </p>
        </div>

        {/* Instagram Feed Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(posts.length / 3) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {posts.slice(slideIndex * 3, slideIndex * 3 + 3).map((post, index) => (
                    <div
                      key={index}
                      className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                    >
                      {/* Post Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt="Instagram post"
                          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center space-x-4 text-white">
                              <div className="flex items-center space-x-1">
                                <Heart className="w-5 h-5" />
                                <span className="text-sm">{post.likes}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MessageCircle className="w-5 h-5" />
                                <span className="text-sm">{post.comments}</span>
                              </div>
                              <Share className="w-5 h-5 ml-auto cursor-pointer hover:scale-110 transition-transform duration-200" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Post Caption */}
                      <div className="p-6">
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {post.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: Math.ceil(posts.length / 3) }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-pink-500 scale-125' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Follow Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Instagram className="w-6 h-6" />
            <span>Follow on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;

import { useState } from 'react';
import { Camera, Play, Youtube, ExternalLink } from 'lucide-react';

const VlogsSection = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  const videos = [
    {
      id: "gSOkNYhYy3M",
      title: "My daily vlog as a nursing student",
      views: "500+",
      thumbnail: "/Screenshot 2025-06-22 020027.png",
      link: "https://www.youtube.com/embed/gSOkNYhYy3M?autoplay=1",
    },
    {
      id: "rJJZWk9q8zk",
      title: "All about my college, college of nursing snmc agra 👍",
      views: "1k",
      thumbnail: "/Screenshot 2025-06-22 015702.png",
      link: "https://www.youtube.com/embed/rJJZWk9q8zk?autoplay=1",
    },
    {
      id: "5EIA509-Xm4",
      title: "Sawal- kya tumhe mere yaad aati hai?",
      views: "1k",
      thumbnail: "/Screenshot 2025-06-22 020751.png",
      link: "https://www.youtube.com/embed/5EIA509-Xm4?autoplay=1",
    }
  ];

  return (
    <section id="vlogs" className="py-20 bg-gradient-to-br from-white to-mountain-dawn relative overflow-hidden">
      {/* Floating icons */}
      <div className="absolute top-10 right-10 animate-float">
        <Camera className="w-16 h-16 text-mountain-peak/30" />
      </div>
      <div className="absolute bottom-20 left-10 animate-float" style={{ animationDelay: '2s' }}>
        <Play className="w-12 h-12 text-mountain-sunset/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Youtube className="w-10 h-10 text-red-500 mr-4" />
            <h2 className="text-4xl md:text-5xl font-dancing font-bold text-gradient">
              <br />
              Poetry & Vlogs
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Adventures captured through my lens - from mountain peaks to nursing tales
          </p>
        </div>

        {/* Video Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredVideo(index)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              {/* If playing, show iframe */}
              {activeVideoIndex === index ? (
                <div className="w-full h-48">
                  <iframe
                    className="w-full h-full rounded-t-3xl"
                    src={video.link}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Play Button Overlay */}
                  <div
                    className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => setActiveVideoIndex(index)}
                  >
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300 cursor-pointer">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>

                  {/* Duration & Views */}
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm">
                    {video.views} views
                  </div>
                </div>
              )}

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-mountain-peak transition-colors duration-300">
                  {video.title}
                </h3>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setActiveVideoIndex(index)}
                    className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>Watch</span>
                  </button>

                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-mountain-peak transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Floating Camera Icon */}
              {hoveredVideo === index && (
                <div className="absolute -top-2 -right-2 animate-float">
                  <Camera className="w-8 h-8 text-mountain-sunset" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Channel Link */}
        <div className="text-center">
          <a
            href="https://www.youtube.com/@poetic_nurse34/videos"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="w-6 h-6" />
            <span>Visit My YouTube Channel</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VlogsSection;

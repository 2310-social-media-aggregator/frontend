import './Youtube.css'
import React from 'react';


interface YoutubeProps {
	videoId: string;
}

const Youtube: React.FC<YoutubeProps> = ({ videoId }) => {
  // Construct the URL of the embedded YouTube video
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="youtube-card">
      <iframe
        width="560"
        height="315"
        src={youtubeUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Youtube;
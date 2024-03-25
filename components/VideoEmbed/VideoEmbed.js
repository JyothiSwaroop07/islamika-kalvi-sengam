// VideoEmbed.js

import React from 'react';

const VideoEmbed = ({ videoLink }) => {
  // Extracting video ID from the link
  const videoId = videoLink ? extractVideoId(videoLink) : '';

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <iframe
        className="w-full h-96"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

// Function to extract video ID from YouTube link
const extractVideoId = (videoLink) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = videoLink.match(regex);
  if (match && match[1]) {
    return match[1];
  } else {
    // If link is invalid, return empty string
    return '';
  }
};

export default VideoEmbed;

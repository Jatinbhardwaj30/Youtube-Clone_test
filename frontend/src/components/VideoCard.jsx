import React from 'react';
import { Link } from 'react-router-dom';
import './VideoCard.css';

function VideoCard({ video }) {
  return (
    <Link to={`/video/${video._id}`} className="video-card">
      <img src={video.thumbnail} alt={video.title} className="thumbnail" />
      <div className="video-meta">
        <img src={video.channelImage} alt="channel" className="channel-img" />
        <div>
          <h4 className="video-title">{video.title}</h4>
          <p className="channel-name">{video.channel}</p>
          <p className="video-stats">1.2M views • 2 days ago</p>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;

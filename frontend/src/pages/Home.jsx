import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from '../components/VideoCard';
import './Home.css';

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/videos')
      .then(res => setVideos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="home-container">
      {videos.map(video => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
}

export default Home;

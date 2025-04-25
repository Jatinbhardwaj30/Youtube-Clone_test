import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './VideoDetail.css';

function VideoDetail() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/videos/${id}`)
      .then(res => setVideo(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!video) return <div>Loading...</div>;

  return (
    <div className="video-detail">
      <video src={video.videoUrl} controls autoPlay />
      <h2>{video.title}</h2>
      <p>{video.description}</p>
    </div>
  );
}

export default VideoDetail;

const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  channel: String,
  thumbnail: String,
  videoUrl: String,
  channelImage: String,
});

module.exports = mongoose.model('Video', videoSchema);

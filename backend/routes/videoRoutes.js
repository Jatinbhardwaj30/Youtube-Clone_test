const express = require('express');
const router = express.Router();
const Video = require('../models/Video');


router.get('/', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: 'Not found' });
    res.json(video);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

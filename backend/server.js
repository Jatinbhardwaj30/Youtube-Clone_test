const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const videoRoutes = require('./routes/videoRoutes');
app.use('/api/videos', videoRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
app.use('/videos', express.static('videos'));

const express = require('express');
const mongoose = require('mongoose');
const requestLogger = require('./middleware/logger');
const authRoutes = require('./routes/authRoutes');
const recordRoutes = require('./routes/recordRoutes');

const app = express();
app.use(express.json());

// [SEC-07] Request Logging Middleware
app.use(requestLogger);

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/records', recordRoutes);

// [SEC-04] 404 Route Not Found Handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// [SEC-04] Global Error Handler (500)
app.use((err, req, res, next) => {
  console.error('[ERROR]', err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

// Database Connection & Server Startup
mongoose.connect('mongodb://localhost:27017/my-project-db')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => console.log('Server running on port 3000'));
  })
  .catch(err => console.error('Database connection error:', err));
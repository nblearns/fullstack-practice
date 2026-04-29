const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON requests
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// API endpoint
app.post('/submit', (req, res) => {
  console.log('Received from frontend:', req.body);

  res.json({
    status: 'success',
    data: req.body
  });
});

// Start server (important for sandbox)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
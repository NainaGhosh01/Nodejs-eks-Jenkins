const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to EKS Node.js App 🚀');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Only start the server if the file is run directly (not during testing)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
}

module.exports = app; // Export the app for testing

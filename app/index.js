const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.APP_ENV || 'local';
const VERSION = process.env.APP_VERSION || 'v1';

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from MyApp v2 - Gitops is working!',
    environment: ENV,
    version: VERSION,
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
  console.log(`Environment: ${ENV}`);
});

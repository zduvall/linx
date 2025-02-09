const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Fallback: For any route not matched above, send 404.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '404.html'));
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

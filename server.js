/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log(`Server listening on port ${PORT}`);

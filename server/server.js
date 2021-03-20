const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

const PORT = config.get('port') || 5000;

async function start() {
  try {
    await mongoose.connect(config.get('mongoDB'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
  } catch (error) {
    console.log('Server error', error.message);
    process.exit(1);
  }
}

start();

require('express-async-errors');
const express = require('express');
const createError = require('http-errors');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
// require('express-async-errors'); // ! ???
const { NOT_FOUND } = require('http-status-codes');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/files', express.static(__dirname, '../files'));

// app.use(checkAuthentication);

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use(
  morgan(
    ':method :status :url :userId size req :req[content-length] res :res[content-length] - :response-time ms',
    {
      stream: webkitRequestAnimationFrame.stream
    }
  )
);

app.use((req, res, next) => next(createError(NOT_FOUND)));
// app.use(errorHolder);

module.exports = app;

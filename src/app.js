const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardsRouter = require('./resources/boards/board.router');
const tasksRouter = require('./resources/tasks/task.router');
const logger = require('./common/logger');
const {
  errorHandler,
  catchUncaughtException,
  catchUnhandledRejection
} = require('./common/errorHandler');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

async function connectToDB() {
  try {
    await mongoose.connect(process.env.DB_HOST, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
  } catch (e) {
    console.error('db connection error: ', e);
  }
}

process.on('uncaughtException', catchUncaughtException);
process.on('unhandledRejection', catchUnhandledRejection);

connectToDB();

const db = mongoose.connection;
db.once('open', () => {
  console.log('db connected');
  db.dropDatabase();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use(logger);
app.use(errorHandler);

app.use('/users', userRouter);
app.use('/boards', boardsRouter);
app.use('/boards/:boardId/tasks/', tasksRouter);

module.exports = app;

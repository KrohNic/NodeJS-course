require('./common/uncathedCather');
const { PORT, MONGO_CONNECTION_STRING } = require('./common/config');
const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', () => console.error('db connection error: ')).once(
  'open',
  () => {
    console.log('db connected');
    // db.dropDatabase();

    app.listen(PORT, () =>
      console.log(`App is running on http://localhost:${PORT}`)
    );
  }
);

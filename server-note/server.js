const dotenv = require('dotenv').config({ path: `${__dirname}/config.env` });
const mongoose = require('mongoose');
const logger = require('./winston');

// Handle uncaughtException errors globally
process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception!  Sutting down...');
  logger.error({ message: err.message, stack: err.stack });
  // Shutdown application
  process.exit(1);
});

const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
  // .connect(process.env.DB, {
  // .connect('mongodb://127.0.0.1:27017/notes', {
  .connect(DB, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
  })
  .then((connection) => {
    console.log(' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('| Connected To notes DataBase |');
    console.log(' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  })
  .catch((err) => {
    console.log('Error:' + err.message);
  });

const port = process.env.PORT || 5000;
app.listen(port, () => logger.info(`App runnig on port ${port}...`));

// Handle unhandledRejection errors globally
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥');
  logger.error({ message: err.message, stack: err.stack });
});

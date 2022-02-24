const app = require('./app');
const database = require('./config');
const { seedHotel } = require('./repositories/hotel-repo');

const startServer = async () => {
  await database.connect();
  await seedHotel();
  const port = process.env.PORT || 3000;
  app.listen(port, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Bot listenenig on port ${port}`);
  });
};

startServer();
const usersRouter = require('./users.routes');

function routerApi(app) {
  app.use('/users', usersRouter);
}

module.exports = routerApi;

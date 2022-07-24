const express = require('express');
const consign = require('consign');

module.exports = () => {
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  consign().include('routers').into(app);

  return app;
};

const routes = require("express").Router();



routes.use("/api/city", require("../controllers/CityController"));

routes.use("/api/signup", require("../controllers/SignupController"));


module.exports = routes;


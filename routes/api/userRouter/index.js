//Adds '/users' to the routes from userRouter.js
const router = require("express").Router();
const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);

module.exports = router;

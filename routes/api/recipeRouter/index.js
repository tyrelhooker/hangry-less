//Adds '/recipes' to the routes from userRouter.js
const router = require("express").Router();
const recipeRoutes = require("./recipeRoutes");

router.use("/recipes", recipeRoutes);

module.exports = router;

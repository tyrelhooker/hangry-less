const router = require("express").Router();
const userRoutes = require("./userRouter/userRoutes");
const recipeRoutes = require("./recipeRouter/recipeRoutes")

router.use("/users", userRoutes);
router.use("/recipes", recipeRoutes);

module.exports = router;
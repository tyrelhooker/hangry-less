const router = require("express").Router();
const userRoutes = require("./UserRouter/userRoutes");
const recipeRoutes = require("./RecipeRouter/recipeRoutes")

router.use("/users", userRoutes);
router.use("/recipes", recipeRoutes);

module.exports = router;
const router = require("express").Router();
const recipeController = require("../../controller/recipeController");

//Matches with "api/recipes" --- see ./index.js and ../index.js
router.route("/")
  .get(recipeController.findAll)

//Matches with "/api/recipes/:id" --- see ./index.js and ../index.js
router
  .route("/:id")
  .get(recipeController.findById)
  .delete(recipeController.remove);

module.exports = router;
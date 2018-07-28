const router = require("express").Router();
const userController = require("../../../controller/userController");

//Matches with "api/users" --- see ./index.js and ../index.js
router
  .route("/")
  .get(userController.findAll)
  .post(userController.create)

//Matches with "/api/users/:id" --- see ./index.js and ../index.js
router
  .route("/:id")
  .get(userController.update)
  .delete(userController.remove);

module.exports = router;
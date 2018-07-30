import axios from "axios";

export default {
  //Get all recipes from mongoDB
  getRecipes: function() {
    return axios.get("/api/recipes");
  },
  //Get recipe by specific id
  getRecipe: function(id) {
    return axios.get("/api/recipes/" + id);
  },
  // //Delete recipe by specific id
  // deleteRecipe: function(id) {
  //   return axios.delete("/api/recipes/" + id);
  // },
  //Save a user to mongo by their firebase id
  saveUser: function(firebaseId) {
    return axios.post("/api/users/", firebaseId);
  },
  //Find a user by their firebase id
  getUser: function(firebaseId) {
    return axios.get("/api/users/" + firebaseId);
  },
  //Save a recipe to a user account
  saveRecipe: function(firebaseId, recipeId) {
    return axios.post("/api/users/" + firebaseId, { $push: {recipes: recipeId} });
  }
}
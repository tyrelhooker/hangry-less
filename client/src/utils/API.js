import axios from "axios";

//Do we want the save and delete functions to point to a new collection?
//They need to be linked with the user's account...

export default {
  //Get all recipes from mongoDB
  getRecipes: function() {
    return axios.get("/api/recipes");
  },
  //Get recipe by specific id
  getRecipe: function(id) {
    return axios.get("/api/recipes/" + id);
  },
  //Delete recipe by specific id
  deleteRecipe: function(id) {
    return axios.delete("/api/recipes/" + id);
  },
  //Save a recipe by firebase id
  saveUser: function(firebaseId) {
    return axios.post("/api/users/", firebaseId);
  },
  //Find a user by id
  getUser: function(firebaseId) {
    return axios.get("/api/users/" + firebaseId);
  }
}
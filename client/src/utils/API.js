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
<<<<<<< HEAD
  //Save a user by firebase id
  saveUser: function(firebaseid) {
    console.log({firebaseid});
    return axios.post("/api/users/", firebaseid);
||||||| merged common ancestors
  //Save a recipe by firebase id
  saveUser: function(id) {
    return axios.post("/api/users/", id);
=======
  //Save a recipe by firebase id
  saveUser: function(firebaseId) {
    return axios.post("/api/users/", firebaseId);
  },
  //Find a user by id
  getUser: function(firebaseId) {
    return axios.get("/api/users/" + firebaseId);
>>>>>>> 782e6cab405b961dfbf587691498860e6f41ec75
  }
}
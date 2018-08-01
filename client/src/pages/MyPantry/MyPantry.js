import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import { SavedRecipeCard } from "../../components/Card";
import API from "../../utils/API";
import withAuthorization from "../Authorization/withAuthorization";


class MyPantry extends Component {
  state = {
    recipes: [],
    id: ""
  };

  componentDidMount() {
    console.log("Pantry User?", sessionStorage.getItem('user'));
    this.getSavedRecipes();
  }

  getSavedRecipes = () => {
    API.getUser(sessionStorage.getItem('user'))
    .then(res => {
      return this.loadRecipes(res.data.recipes);
    })
    .then(recipes=>{
      console.log("after load recipes", recipes);
      this.setState({
        recipes: recipes
      })
    })
    .catch(err => console.log(err));
  }

  loadRecipes = (recipes) => {
    console.log("hey there")
    return Promise.all(recipes.map((recipe)=>{
      return API.getRecipe(recipe)
    }));
  };

  handleDelete = (recipeId) => {
    console.log("hello delete");
    console.log("recipe id", recipeId);
    API.deleteRecipe(sessionStorage.getItem('user'), recipeId)
    .then(res => this.getSavedRecipes())
    .then(alert("Recipe has been removed."))
    // .then(window.location.reload())
    .catch(err => console.log(err));
  }

  render() {
    console.log("test", this.state.recipes);
    return (
      <div>
        <Container fluid uniqueClassName="recipeContainer">
          <h1 className="center-align">This Week's Recipes</h1>
            <Row >
              {this.state.recipes.length ? (
                <div>
                {this.state.recipes.map(recipe => (
                  <SavedRecipeCard
                    key={recipe.data._id}  
                    image={recipe.data.image}
                    title={recipe.data.title}
                    dataId={recipe.data._id}
                    handleDelete={() => this.handleDelete(recipe.data._id)}
                  />
                ))}
                </div>
              ) : (
                <h1 className="center-align">You haven't saved any recipes yet.</h1>
              )}
          </Row>
        </Container>
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(MyPantry);
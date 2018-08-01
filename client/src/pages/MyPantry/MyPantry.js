//Page that renders the recipes saved to a user account
import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import { SavedRecipeCard } from "../../components/Card";
import API from "../../utils/API";
import withAuthorization from "../Authorization/withAuthorization";
// import { db } from "../../firebase";

class MyPantry extends Component {
  state = {
    recipes: [],
    id: ""
  };

  componentDidMount() {
    this.getSavedRecipes();
  }

  getSavedRecipes = () => {
    API.getUser(sessionStorage.getItem('user'))
    .then(res => {
      return this.loadRecipes(res.data.recipes);
    })
    .then(recipes=>{
      this.setState({
        recipes: recipes
      })
    })
    .catch(err => console.log(err));
  }

  loadRecipes = (recipes) => {
    return Promise.all(recipes.map((recipe)=>{
      return API.getRecipe(recipe)
    }));
  };

  handleDelete = (recipeId) => {
    API.deleteRecipe(sessionStorage.getItem('user'), recipeId)
    .then(res => this.getSavedRecipes())
    .catch(err => console.log(err));
  }

  render() {
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
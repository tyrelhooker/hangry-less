//Page that renders the list of ingredients from all saved recipes
import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import withAuthorization from "../Authorization/withAuthorization";
import { List } from "../../components/List/List";
import { ListItem } from "../../components/List/ListItem";

class MyPantry extends Component {
  state = {
    recipes: []
  };

  componentDidMount() {
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

  render() {
    return (
      <div>
        <Container fluid uniqueClassName="recipeContainer">
          <h1 className="center-align">This Week's Grocery List</h1>
            <Row >
              {this.state.recipes.map(recipe => (
                <List>
                  {recipe.data.ingredients.map(ingredient => (
                    <ListItem 
                      key={ingredient.item}
                      item={ingredient.item}
                      qty={ingredient.qty}
                    />
                  ))}
                </List>
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(MyPantry);
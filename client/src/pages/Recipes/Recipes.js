//Page that renders all the recipes
import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import { RecipeCard } from "../../components/Card";
import API from "../../utils/API";
import firebase from 'firebase/app';
import withAuthorization from "../Authorization/withAuthorization";
import "./Recipes.css";

class Recipes extends Component {
  state = {
    users: null,
    recipes: [],
    clicked: false,
    id: ""
  };

  componentDidMount() {
    this.loadRecipes();
    API.getUser(sessionStorage.getItem('user'))
    .then(res => {
      if (res.data === null) {
        API.saveUser({
          firebaseId: sessionStorage.getItem('user')
        })
        .then(localStorage.setItem('user', this.props.authUser.uid));
      }
    })
    .catch(err => console.log(err));
  }

  loadRecipes = () => {
    API.getRecipes()
      .then(res =>
        this.setState({ recipes: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleSave = (recipeId) => {
    const user= firebase.auth().currentUser.uid;
    API.saveRecipe(user, recipeId)
      .then(alert("Recipe has been saved to your Pantry!"))
      .catch(err => console.log(err));
    this.setState.saved = true;
  };

  render() {
    return (
      <div>
        <Container fluid uniqueClassName="recipeContainer">
        <h1 className="center-align">What's For Dinner?</h1>
          <Row >
            {this.state.recipes.map(recipe => (
              <RecipeCard 
                key={recipe._id}  
                image={recipe.image}
                title={recipe.title}
                dataId={recipe._id}
                handleSave={() => this.handleSave(recipe._id)}
              />
            ))}
        </Row>
        </Container>
      </div>
    );
  }
}


const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(Recipes);
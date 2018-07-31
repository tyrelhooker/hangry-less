import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import { RecipeCard } from "../../components/Card";
import firebase from 'firebase/app';
import API from "../../utils/API";
import AuthUserContext from '../Authorization/AuthUserContext';

import withAuthorization from "../Authorization/withAuthorization";
import { db } from "../../firebase";
// import "./Recipes.css";

const user = localStorage.getItem('user');

class MyPantry extends Component {
  state = {
    users: null,
    recipes: [],
    clicked: false,
    id: ""
  };

  componentDidMount() {
    console.log("Pantry User?", user)
    API.getUser(user)
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

  render() {
    console.log("test", this.state.recipes);
    const { users } = this.state;
    return (
      <div>
        <Container fluid uniqueClassName="recipeContainer">
        <h1 className="center-align">This Week's Recipes</h1>
          <Row >
            {this.state.recipes.map(recipe => (
              <RecipeCard
                key={recipe.data._id}  
                image={recipe.data.image}
                title={recipe.data.title}
                dataId={recipe.data._id}
              />
            ))}
        </Row>
        </Container>
        { !!users && <UserList  users={users} /> }
      </div>
    );
  }
}

/* 
*/
const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(MyPantry);
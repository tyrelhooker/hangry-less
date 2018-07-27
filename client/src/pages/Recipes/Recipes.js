import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { RecipeCard } from "../../components/Card";
import { FullRecipe } from "../../components/FullRecipe/FullRecipe";
// import recipes from "./recipes.json";
import API from "../../utils/API";
import AuthUserContext from '../Authorization/AuthUserContext';

import withAuthorization from "../Authorization/withAuthorization";
import { db } from "../../firebase";


class Recipes extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     users: null,
  //     recipes: [],
  //     clicked: false,
  //     id: ""
  //     // title: "",
  //     // image: "",
  //     // ingredients: "",
  //     // directions: ""
  //   };
  // }
  state = {
    users: null,
    recipes: [],
    clicked: false,
    id: ""
  };

  componentDidMount() {
    this.loadRecipes();
    // db.onceGetUsers().then(snapshot =>
    //   this.setState(() => ({ users: snapshot.val() }))
    // );
        console.log(this.props);
        API.saveUser({
          id: this.props.authUser.uid
        })
  }

  loadRecipes = () => {
    API.getRecipes()
      .then(res =>
        this.setState({ recipes: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        <Container fluid>
          <Row>

            {this.state.recipes.map(recipe => (
              <RecipeCard 
                key={recipe._id}  
                image={recipe.image}
                title={recipe.title}
                dataId={recipe._id}
              />
            ))}

        </Row>
        </Container>
        { !!users && <UserList  users={users} /> }
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Recipes);
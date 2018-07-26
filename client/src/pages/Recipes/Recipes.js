import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { RecipeCard } from "../../components/Card";
// import recipes from "./recipes.json";
import API from "../../utils/API";

import withAuthorization from "../Authorization/withAuthorization";
import { db } from "../../firebase";


class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
      recipes: [],
      // title: "",
      // image: "",
      // ingredients: "",
      // directions: ""
    };
  }


  componentDidMount() {
    this.loadRecipes();
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
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
            <Col size="s4">
              {this.state.recipes.map(recipe => (
                <RecipeCard 
                  key={recipe.id}  
                  image={recipe.image}
                  title={recipe.title}
                />
              ))}
            </Col>
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
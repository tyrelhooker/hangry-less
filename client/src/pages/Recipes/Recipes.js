import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
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
<<<<<<< HEAD
        console.log(this.props);
        API.saveUser({
          firebaseid: this.props.authUser.uid,
          email: this.props.authUser.email
        })
||||||| merged common ancestors
        console.log(this.props);
        API.saveUser({
          id: this.props.authUser.uid
        })
=======
      console.log(this.props.authUser.uid);
      API.getUser( this.props.authUser.uid)
      .then(res => {
        console.log(res.data)
        if (res.data === null) {
          API.saveUser({
            firebaseId: this.props.authUser.uid
          });
        }
      })
      .catch(err => {
        if(err.response.status===422){
          console.log('Do stuff here')
          API.saveUser({
            firebaseId: this.props.authUser.uid
          });
        }
        else{
          console.log(err);
        }}
      );
>>>>>>> 782e6cab405b961dfbf587691498860e6f41ec75
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

export default withAuthorization(authCondition)(Recipes);
import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import { RecipeCard } from "../../components/Card";
import API from "../../utils/API";
import AuthUserContext from '../Authorization/AuthUserContext';
import firebase from 'firebase/app';
import withAuthorization from "../Authorization/withAuthorization";
import { db } from "../../firebase";
import "./Recipes.css";


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
      console.log("authUser?", this.props.authUser.uid);
      localStorage.setItem('user', this.props.authUser.uid);
      console.log("local storage", localStorage.getItem('user'));
      API.getUser(this.props.authUser.uid)
      .then(res => {
        console.log(res.data)
        if (res.data === null) {
          API.saveUser({
            firebaseId: this.props.authUser.uid
          })
          .then(localStorage.setItem('user', this.props.authUser.uid));
        }
      })
      .catch(err =>
        console.log(err)
      );
    console.log(localStorage.getItem('user'));
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
    console.log("hello");
    const user= firebase.auth().currentUser.uid;
    API.saveRecipe(user, recipeId)
      .then(alert("Recipe has been saved to your Pantry!"))
      .catch(err => console.log(err));
    this.setState.saved = true;
  };

  render() {
    const { users } = this.state;
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
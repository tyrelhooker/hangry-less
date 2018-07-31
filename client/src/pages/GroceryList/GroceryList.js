import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import { RecipeCard } from "../../components/Card";
import { FullRecipe } from "../../components/FullRecipe/FullRecipe";
import firebase from 'firebase/app';
import API from "../../utils/API";
import AuthUserContext from '../Authorization/AuthUserContext';
import withAuthorization from "../Authorization/withAuthorization";
import { db } from "../../firebase";
import { List } from "../../components/List/List";
import { ListItem } from "../../components/List/ListItem";

const user = localStorage.getItem('user');
let allRecipes = [];

class MyPantry extends Component {
  state = {
    users: null,
    recipes: [],
    clicked: false,
    id: "",
    allRecipes: []
  };

  componentDidMount() {
    console.log("Grocery user?!", user);
    API.getUser(user)
    .then(res => {
      return this.loadRecipes(res.data.recipes);
      console.log("hi", res.data.recipes);
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
    // console.log(this.state.recipeIds);
    // for (let i=0; i<this.state.recipeIds.length; i++) {
    //   API.getRecipe(this.state.recipeIds[i])
    //   .then(res => 
    //     this.setState({recipes: [...this.state.recipes, res.data]})
    //   )
    // }
    return Promise.all(recipes.map((recipe)=>{
      return API.getRecipe(recipe)
    }));
  };

  compiledList = () => {
    this.state.recipes.map(recipe => (
      recipe.data.ingredients.map(ingredient => (
        allRecipes.push(ingredient)
      ))
    ))
    console.log(allRecipes);
  }
  

  render() {
    console.log("test", this.state.recipes);
    // console.log(this.compileList());
    const { users } = this.state;
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












// import React, { Component } from "react";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import withAuthorization from "../Authorization/withAuthorization";

// class GroceryList extends Component {
//   render() {
//     return (
//       <div>
//         <Container fluid>
//           <Row>
//             <Col size="s6">
//               <List />
//                 <ListItem />
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     )
//   }
// }

// const UserList = ({ users }) =>
//   <div>
//     <h2>List of Usernames of Users</h2>
//     <p>(Saved on Sign Up in Firebase Database)</p>

//     {Object.keys(users).map(key =>
//       <div key={key}>{users[key].username}</div>
//     )}
//   </div>

// const authCondition = (authUser) => !!authUser;

// export default withAuthorization(authCondition)(GroceryList);
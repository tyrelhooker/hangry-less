import React, {Component} from "react";
import API from "../../utils/API";
import {Col} from "../../components/Grid";
import { IngredientItem } from "./IngredientItem";
import { DirectionItem } from "./DirectionItem";
import { Btn } from "../Btn";
import firebase from 'firebase/app';

// console.log(firebase.auth().currentUser);

export class FullRecipe extends Component{
  state ={
    title: "",
    image: "",
    ingredients: [],
    directions: [],
    id: this.props.match.params.id,
    savedRecipes: [],
    saved: false
  }

  componentDidMount() {
    // setTimeout(this.checkForSaved(),3000);
    this.loadRecipe();
  };

  // checkForSaved = () => {
  //   const user= localStorage.getItem('user');
  //   console.log(user);
  //   API.getUser(user)
  //   .then(res => 
  //     // this.setState({ savedRecipes: res.data.recipes }))
  //     console.log(res.data.recipes))
  //   .then(this.loopForSaved())
  //   .catch(err => console.log(err));
  // }

  // loopForSaved = () => {
  //   for (let i=0; i<this.state.savedRecipes; i++) {
  //     if (this.state.savedRecipes[i] === this.props.match.params.id) {
  //       this.setState.saved = true
  //     }
  //   }
  // }

  loadRecipe = () => {
    console.log(this.state.id);
    API.getRecipe(this.props.match.params.id)
      .then(res =>
        this.setState({
          key: res.data.id,
          ingredients: res.data.ingredients,
          directions: res.data.directions,
          title: res.data.title,
          image: res.data.image
        })
      )
    .catch(err => console.log(err))
  };

  handleSave = () => {
    console.log("hello");
    const user= firebase.auth().currentUser.uid;
    API.saveRecipe(user, this.props.match.params.id)
      .then(alert("Recipe has been saved to your Pantry!"))
      .catch(err => console.log(err));
    this.setState.saved = true;
  };

  handleDelete = () => {
    console.log("hello delete button")
  };

  render(){
    return (
      <div className="container">
        <img className="responsive-img" src={this.state.image} alt="" />
        <h1>{this.state.title}</h1>
        <Col size="m6">
          <Btn onClick={this.handleSave}>Save to MyPantry</Btn>
          <div className="ingredients">
            <h3>Ingredients:</h3>
              {this.state.ingredients.map(ingredient => (
                <IngredientItem
                  key={ingredient._id}
                  item={ingredient.item}
                  qty={ingredient.qty}
                />
              ))}
          </div>
        </Col>
        <Col size="m6">
          <div className="Driections">
            <h3>Directions:</h3>
              {this.state.directions.map(direction => (
                  <DirectionItem
                    key={direction._id}
                    step={direction.step}
                    info={direction.info}
                  />
              ))}
          </div>
        </Col>

      </div>

    )
  }
};
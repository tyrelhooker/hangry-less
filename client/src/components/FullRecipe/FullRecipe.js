import React, {Component} from "react";
import API from "../../utils/API";
import {Col} from "../../components/Grid";
import { IngredientItem } from "./IngredientItem";
import { DirectionItem } from "./DirectionItem";
import { Btn } from "../Btn";

export class FullRecipe extends Component{
  state ={
    title: "",
    image: "",
    ingredients: [],
    directions: [],
    id: this.props.match.params.id
  }

  componentDidMount() {
    this.loadRecipe();
  };

  loadRecipe = () => {
    console.log("hi");
    console.log(this.state.id);
    API.getRecipe(this.props.match.params.id)
      .then(res =>
        this.setState({
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
  }

  render(){
    return (
      <div className="container">
        <img className="responsive-img" src={this.state.image} alt="" />
        <h1>{this.state.title}</h1>
        <Col size="m6">
          <Btn onclick={this.handleSave}>Save to MyPantry</Btn>
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
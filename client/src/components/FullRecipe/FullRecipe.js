import React, {Component} from "react";
import API from "../../utils/API";
import {Col} from "../../components/Grid";

//make this statefull? add ingridents and and instructions into the state and map over them?

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

  render(){
    return (
      <div className="container">
        <img src={this.state.image} />
        <h1>{this.state.title}</h1>
        <Col size="m6">
          <div className="ingredients">
            <h2>Ingredients:</h2>
            <ul>
              {this.state.ingredients.map(ingredient => (
                <li> {ingredient.item} </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col size="m6">
          <div className="Driections">
            <h2>Directions:</h2>
            <ul>
              {this.state.directions.map(direction => (
                <li>
                  {direction.step}. {direction.info}
                  <br /><br />
                </li>
              ))}
            </ul>
          </div>
        </Col>

      </div>

    )
  }
};
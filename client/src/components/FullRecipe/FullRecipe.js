import React, {Component} from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Row, Col } from "../../components/Grid";
import { IngredientItem } from "./IngredientItem";
import { DirectionItem } from "./DirectionItem";

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
    this.loadRecipe();
  };

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

  render(){
    return (
      <div className="container">
        <Link to ={`/Recipes`}>
          <img className="responsive-img recipeImage recipe-image" src={this.state.image} alt="" />
        </Link>
        <div className="title-row">
          <h1 className="recipe-title">{this.state.title}</h1>
        </div>
        <Row> 
          <Col size="s12 m6">
            <div className="ingredients">
              <h3>Ingredients</h3>
                <div className="card ingredients-card">
                  {this.state.ingredients.map(ingredient => (
                    <IngredientItem
                      key={ingredient._id}
                      item={ingredient.item}
                      qty={ingredient.qty}
                    />
                  ))}
                </div>
            </div>
          </Col>
          <Col size="s12 m6" className="directionsBox">
            <div className="directions">
              <h3>Directions</h3>
                {this.state.directions.map(direction => (
                    <DirectionItem
                      key={direction._id}
                      step={direction.step}
                      info={direction.info}
                    />
                ))}
            </div>
          </Col>
        </Row>
      </div>
    )
  }
};
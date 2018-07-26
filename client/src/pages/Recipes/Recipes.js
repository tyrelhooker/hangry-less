import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { RecipeCard } from "../../components/Card";
import { FullRecipe } from "../../components/FullRecipe/FullRecipe";
// import recipes from "./recipes.json";
import API from "../../utils/API";

class Recipes extends Component {
  state = {
    recipes: [],
    clicked: false,
    id: ""
  };

  componentDidMount() {
    this.loadRecipes();
  }

  loadRecipes = () => {
    API.getRecipes()
      .then(res =>
        this.setState({ recipes: res.data
        })
      )
      .catch(err => console.log(err));
  };

  // handleClick = (id) => {
  //   console.log("this is the id", id);
  //   // this.setState({ clicked: true, id: id });
  //   // this.handleFullLoad();
  // }

  // handleFullLoad = () => {
  //   API.getRecipe(this.state.id)
  //   .then(res => 
  //     this.setState({ recipes: res.data
  //     })
  //   )
  //   .catch(err => console.log(err));
  // };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
          <Col size="s12 m6 l4">
            {this.state.recipes.map(recipe => (
              <RecipeCard 
                key={recipe._id}  
                image={recipe.image}
                title={recipe.title}
                dataId={recipe._id}
              />
            ))}
          </Col>
        </Row>
        </Container>
      </div>
    )
  }
}

export default Recipes;
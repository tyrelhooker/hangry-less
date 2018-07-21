import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { RecipeCard } from "../../components/Card";
// import recipes from "./recipes.json";

class Recipes extends Component {
  // state = {
  //   recipes
  // };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="s4">
              {/* {this.state.recipes.map(recipe => ( */}
                <RecipeCard />
              {/* ))} */}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Recipes;
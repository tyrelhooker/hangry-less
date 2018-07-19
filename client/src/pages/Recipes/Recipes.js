import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { RecipeCard } from "../../components/Card";

class Recipes extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="s4">
              <RecipeCard />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Recipes;
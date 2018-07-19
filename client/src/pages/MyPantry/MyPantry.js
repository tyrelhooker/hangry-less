import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { SavedRecipeCard } from "../../components/Card";

class MyPantry extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="s4">
              <SavedRecipeCard />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default MyPantry;
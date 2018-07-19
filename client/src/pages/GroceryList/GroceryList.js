import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";

class GroceryList extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="s12">
              GroceryList Here
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default GroceryList;
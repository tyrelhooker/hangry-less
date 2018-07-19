import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class GroceryList extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="s6">
              <List />
                <ListItem />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default GroceryList;
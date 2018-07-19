import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";

class Main extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="s12">
              <div className="card-panel grey lighten-2">
                {/* <div className="container"> */}
                  <h1>Welcome Message</h1>
                  <p>Include about information and also how to use!</p>
                {/* </div> */}
              </div>
              <div className="card">
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Main;
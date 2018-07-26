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
                  <h1>Become Hangry-less now!</h1>
                  <p>Include about information and also how to use!</p>
                  <div className="row valign-wrapper">
                    <div className="col s4">
                      <img src="./images/recipe.jpg" className="circle responsive-img"/>
                    </div>
                    <div className="col s4">
                      <img src="./images/jars.jpg" className="circle responsive-img"/>
                    </div>
                    <div className="col s4">
                      <img src="./images/list.jpg" className="circle responsive-img"/>
                    </div>
                  </div>
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
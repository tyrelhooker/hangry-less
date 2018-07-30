import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="s12">
              <div className="card-panel mainCard lighten-2">
                  <h1>Become Hangry-less Now!</h1>
                  <p>Hangry is a real problem. And it can lead to some pretty horrible decision making when there isn't a good plan in place. Hangry-less is a meal planning app that will help you find, prepare, and cook easy recipes. We take the "micro-decisions" out of meal planning so no one's asking the dreaded question: "What should I eat for dinner?"</p>
                  <p>Sign up now and gain access to delicious and easy recipes! Don't worry, we'll even compile a complete grocery list for you so you only need to make one stop for the week!</p>
                  <div className="row valign-wrapper center-align">
                    <div className="col s4">
                      <img src="./images/recipe.jpg" className="circle responsive-img" alt=""/>
                    </div>
                    <div className="col s4">
                      <img src="./images/jars.jpg" className="circle responsive-img" alt=""/>
                    </div>
                    <div className="col s4">
                      <img src="./images/list.jpg" className="circle responsive-img" alt=""/>
                    </div>
                  </div>
                  <div className="start-button">
                    <div className="btn-large">Get Started</div>
                  </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Main;
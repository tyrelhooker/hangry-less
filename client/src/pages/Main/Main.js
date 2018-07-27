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
                  <p>Hangry is a real problem. And it can lead to some pretty horrible decision making when there isn't a good plan in place. Hangry-less is a meal planning app that will help you find, prepare, and cook easy recipes so no one's asking the dreded "What should I eat for dinner?" question.</p>
                  <p>Sign up now and gain access to delicious and easy recipes! Don't worry, we'll compile a complete grocery list so you only need one stop for the week.</p>
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
                  <div className="btn-large">Get Started</div>
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
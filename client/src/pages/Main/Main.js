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
                      <img src="https://images.pexels.com/photos/833109/pexels-photo-833109.jpeg?auto=compress&cs=tinysrgb&h=350" className="circle responsive-img"/>
                      <p>
                        See the recipes
                      </p>
                    </div>
                    <div className="col s4">
                      <img src="https://images.pexels.com/photos/15964/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" className="circle responsive-img"/>
                    </div>
                    <div className="col s4">
                      <img src="https://cdn.pixabay.com/photo/2016/09/14/20/47/grocery-list-1670408__340.jpg" className="circle responsive-img"/>
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
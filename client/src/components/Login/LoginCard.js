import React from "react";
import { Col, Row, Container } from "../../components/Grid"

export const LoginCard = ({ children }) => (
  <Container fluid uniqueClassName="loginContainer">
    <Row>
      <Col size="s12 m6 offset-m3">
        <div className="card signInCard center-align">
          {children}
        </div>
      </Col>
    </Row>
  </Container>
);
import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { SavedRecipeCard } from "../../components/Card";
import withAuthorization from "../Authorization/withAuthorization";

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

const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(MyPantry);
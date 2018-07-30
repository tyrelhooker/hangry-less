import React from "react";
import {Link} from "react-router-dom";
import { Col } from "../../components/Grid";
import "./RecipeCard.css";

export const RecipeCard = props => (
  <Link to={`/ExpandedRecipe/${props.dataId}`}>
    <Col size="s12 m6 l4">
      <div className="card recipeCard">
        <div className="card-image">
          <img src={props.image} alt="" />
          {/* <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">+</i></a> */}
        </div>
        <div className="card-content">
          <h4 className="recipe-title" data-id={props.dataId}>{props.title}</h4>
        </div>
      </ div>
    </Col>
  </Link>
);

// export default RecipeCard;
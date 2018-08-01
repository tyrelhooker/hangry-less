import React from "react";
import { Link } from "react-router-dom";
import { Col } from "../../components/Grid";
import "./RecipeCard.css";

export const RecipeCard = props => (
  <Col size="s12 m6 l4">
    <div className="card recipeCard z-depth-3">
      <div className="card-image">
        <Link to={`/ExpandedRecipe/${props.dataId}`}>
          <img className="recipeImage" src={props.image} alt="" />
        </Link>
      </div>
      <div onClick={props.handleSave} className="btn" style={{background: "#ef5a5c"}}>Add to Pantry</div>
      <div className="card-content">
        <h4 className="recipe-title" data-id={props.dataId}>{props.title}</h4>
      </div>
    </ div>
  </Col>
);

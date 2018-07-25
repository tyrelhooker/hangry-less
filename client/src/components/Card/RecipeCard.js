import React from "react";
import {Link} from "react-router-dom";
import "./RecipeCard.css";

export const RecipeCard = props => (
  <div className="card">
    <Link to={`/ExpandedRecipe/${props.dataId}`}>
      <div className="card-image">
        <img src={props.image} />
        <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">+</i></a>
      </div>
      <div className="card-content">
        <h4 className="black-text" data-id={props.dataId}>{props.title}</h4>
      </div>
    </Link>
  </ div>
);

// export default RecipeCard;
import React from "react";
import {Link} from "react-router-dom";

export const RecipeCard = props => (
  <div className="card">
    <div className="card-image">
      <img src={props.image} />
      <span className="card-title" data-id={props.dataId}>{props.title}</span>
      <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">+</i></a>
    </div>
    <div className="card-content">
    <Link to={`/ExpandedRecipe/${props.dataId}`}>Link to Expanded Recipe</Link>
    </div>
  </ div>
);

// export default RecipeCard;
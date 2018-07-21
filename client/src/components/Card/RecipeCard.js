import React from "react";

export const RecipeCard = props => (
  <div className="card">
    <div className="card-image">
      <img src={props.image} />
      <span className="card-title">{props.title}</span>
      <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">+</i></a>
    </div>
    <div className="card-content">
      <p>Link to Instructions and ingredients</p>
    </div>
  </ div>
);

// export default RecipeCard;
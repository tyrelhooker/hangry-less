import React, { Component } from "react";
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from "constants";

export const RecipeCard = props => (
  <div className="card">
    <div className="card-image">
      {/* <img src="https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221__340.jpg"/> */}
      <img src={props.image} />
      <span className="card-title">Recipe Title</span>
      <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">+</i></a>
    </div>
    <div className="card-content">
      <p>Link to Instructions and ingredients</p>
    </div>
  </ div>
);

// export default RecipeCard;
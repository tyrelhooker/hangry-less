import React, {Component} from "react";
import API from "../../utils/API";

//make this statefull? add ingridents and and instructions into the state and map over them?

export class FullRecipe extends Component{
  render(){
    return (<div>{this.props.match.params.id}</div>)
  }
}
// class FullRecipe extends Comment {
//   state ={
//     title: "",
//     image: "",
//     ingredients: [],
//     directions: [],
//     id: ""
//   };

//   componentDidMount() {
//     this.loadRecipe();
//   }

//   loadRecipe = () => {
//     API.getRecipe(this.state.id)
//       .then(res =>
//         this.setState({
//           ingredients: res.data.ingredients,
//           directions: res.data.directions,
//           title: res.data.title,
//           image: res.data.image
//         })
//       )
//       .catch(err => console.log(err));
//   };
  
// }

// export const FullRecipe = props => (
//   <div className="recipe">
//     <img src={props.image}/>
//     <h1>{props.title}</h1>
//     <div className="ingredients">
//       {props.ingredients}
//     </div>
//     <div className="instructions">
//       {props.instructions}
//     </div>
//   </div>
// );
import React from "react";
import {Link} from "react-router-dom";
import "./RecipeCard.css";
import { Col, Row } from "../../components/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

// const { classes } = this.props;
const styles = {
  card: {
    maxWidth: 400,
    // maxHeight: 400
    marginTop: 20,
    marginBottom: 20,
    // paddingBottom: '30'
  },
  card_header: {
    height: 100
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    // marginTop: '30'
  }
};

export const RecipeCard = props => (
  
  <Col size="s12 m6 l4">
    <Card className="recipeCard" style={styles.card}>
      <Link to={`/ExpandedRecipe/${props.dataId}`}>
        <CardHeader
          className="card-title"
          title={props.title}
          style={styles.card_header}
        />
        <CardMedia 
          className="card-image"
          image={props.image}
          title={props.title}
          style={styles.media}
        />
        <CardContent className="card-content">
          <h4 className="black-text" data-id={props.dataId}>Description Here</h4>
        </CardContent>
        <Button size="small" color="primary"> 
          Save Recipe 
        </Button>
      </Link>
    </ Card>
  </Col>
);

export default RecipeCard;
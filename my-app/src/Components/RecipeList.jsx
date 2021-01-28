import React, { Component } from 'react';
import Recipe from './Recipe'
class RecipeList extends Component {

  render() { 
    return (this.props.recipes.map((recipe,key)=>{
      return <div className = "RecipeName">
      <Recipe recipe = {recipe}/>
      </div>;
      }));
  }
}
 
export default RecipeList;



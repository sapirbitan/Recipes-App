import React, { Component } from 'react';
class RecipeList extends Component {
  state = { 
    recipes: []
   }
  render() { 
    return ( <h3>{this.state.recipes}</h3> );
  }
}
 
export default RecipeList;



import React, { Component } from 'react';
class Recipe extends Component {
    // A recipe will have: name, picture, ingridients, the recipe itself & tags
    render() { 
        return ( <div className = "CurrentRecipe">
        <p>{this.props.recipe.name}</p>
        <img src = {this.props.recipe.image} width = "200" height = "100"/>
        </div>
        );
    }
}
 
export default Recipe;
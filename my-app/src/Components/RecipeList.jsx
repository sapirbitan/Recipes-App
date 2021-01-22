import React, { Component } from 'react';
class RecipeList extends Component {
  state = { 
    recipes: []
   }
  render() { 
    return ( <h3>{this.state.recipes}</h3> );
  }
}
/*const Recipes = [
    {
      name: "Omlet",
      ingridients: ["2 Eggs", "Salt", "Black pepper", "Butter", "Oil"],
      picture: "./Components/omlet.jpg",
      recipe:"Season the beaten eggs well with salt and pepper. Heat the oil and butter in a non-stick frying pan over a medium-low heat until the butter has melted and is foaming. \nPour the eggs into the pan, tilt the pan ever so slightly from one side to another to allow the eggs to swirl and cover the surface of the pan completely. Let the mixture cook for about 20 seconds then scrape a line through the middle with a spatula"
    },
    {
      name: "Salad",
      ingridients: ["1 tomato", "1 cucumber", "1 red pepper", "Salt", "Olive oil"],
      picture: "",
      recipe: "slice the vegetables, season with salt and olive oil"
    },  
    {
      name: "A glass of water",
      ingridients: ["Glass", "200ml water"],
      picture: "",
      recipe: "Pour the water in the glass and drink :)"
    },  
    {
      name: "Pasta",
      ingridients: ["300 grams of Pasta", "1 liter of water", "Tomato sauce"],
      picture: "",
      recipe: "In a large pot pour the water and let it simmer until boiling. Once boiling add the pasta and lower the heat. After 8 minutes pour the water out and add the tomato sauce"
    },
    {
      name: "Nutella Sandwich",
      ingridients: ["2 slices of bread", "1 spoon of nutella"],
      picture: "",
      recipe:"Apply the nutella on 1 slice of bread and close it with the other"
    }
];*/
 
export default RecipeList;



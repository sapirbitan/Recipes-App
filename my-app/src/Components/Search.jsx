import React, { useState } from 'react';
import RecipeData from '../Recipes.json'
import RecipeList from './RecipeList'

export default Search;
function SearchHelp(searchTerm, ){//filters recipes based on the search
  const RecipeList = RecipeData.filter((current_recipe) =>{
    if(searchTerm == ""){
      return current_recipe
    }
    else if (current_recipe.name.toLowerCase().includes(searchTerm.toLowerCase())){
      return current_recipe
    }
  })
  return RecipeList
}
function Search() {
  const [searchTerm, setSearchTerm] = useState('')//create a new state for the search
  return(
    <div className = 'SearchBar'>
      <label htmlFor = "search">Search by recipe:</label>
      <input type="text" placeHolder = "Search..." onChange = {(e)=>setSearchTerm(e.target.value)}/>
      <RecipeList recipes = {SearchHelp(searchTerm)}/>
    </div>

  )
        
}

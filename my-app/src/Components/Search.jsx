import React, { useState } from 'react';
import DATA from './MOCK_DATA.json'
export default Search;
function SearchHelp(searchTerm, ){
  const RecipeList = DATA.filter((val) =>{
  if(searchTerm == ""){
    return val
  }
  else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
    return val
  }
  })
  return RecipeList
}
function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  return(
    <div className = 'SearchBar'>
      <label htmlFor = "search">Search by recipe</label>
      <input type="text" placeHolder = "Search..." onChange = {(e)=>setSearchTerm(e.target.value)}/>
      {SearchHelp(searchTerm).map((val,key)=>{
        return <div className = "RecipeName">
        <p>{val.name}</p>
        <img src = {val.picture} width = "200" height = "100"/>
        </div>;
        })}
    </div>

  )
        
}

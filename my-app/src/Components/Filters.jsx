import React, { Component } from 'react';
class Filters extends Component {
    state = {  }
    render() { 
        return (
            <div id="filter">
                <button className="btn active" onclick={()=>console.log(1)}> Show All</button>
                <button className="btn" onclick="filter('Breakfast')"> Breakfast</button>
                <button className="btn" onclick="filter('Dinner')"> Dinner</button>
                <button className="btn" onclick="filter('Lunch')"> Lunch</button>
                <button className="btn" onclick="filter('Soup')"> Soup</button>
                <button className="btn" onclick="filter('Dessert')"> Dessert</button>
                <button className="btn" onclick="filter('Salad')"> Salad</button>
                <button className="btn" onclick="filter('Snacks')"> Snacks</button>
            </div> );
    }
}
 
export default Filters;
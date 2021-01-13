import React, { Component } from 'react';
class Filters extends Component {
    state = {  }
    render() { 
        return (<div id="filter">
        <button class="btn active" onclick="filter('All')"> Show All</button>
        <button class="btn" onclick="filter('Breakfast')"> Breakfast</button>
        <button class="btn" onclick="filter('Dinner')"> Dinner</button>
        <button class="btn" onclick="filter('Lunch')"> Lunch</button>
        <button class="btn" onclick="filter('Soup')"> Soup</button>
        <button class="btn" onclick="filter('Dessert')"> Dessert</button>
        <button class="btn" onclick="filter('Salad')"> Salad</button>
        <button class="btn" onclick="filter('Snacks')"> Snacks</button>
        </div> );
    }
}
 
export default Filters;
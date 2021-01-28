import React, { Component } from 'react';
class Filters extends Component {
    state = {  }
    render() { 
        return (
            <div id="filter">
                <button className="btn active" onClick={()=>console.log(1)}> Show All</button>
                <button className="btn" onClick="filter('Breakfast')"> Breakfast</button>
                <button className="btn" onClick="filter('Dinner')"> Dinner</button>
                <button className="btn" onClick="filter('Lunch')"> Lunch</button>
                <button className="btn" onClick="filter('Soup')"> Soup</button>
                <button className="btn" onClick="filter('Dessert')"> Dessert</button>
                <button className="btn" onClick="filter('Salad')"> Salad</button>
                <button className="btn" onClick="filter('Snacks')"> Snacks</button>
            </div> );
    }
}
 
export default Filters;
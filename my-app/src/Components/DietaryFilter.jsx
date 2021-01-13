import React, { Component } from 'react';
class DietaryFilter extends Component {
    state = {  }
    render() { 
        return (<div id="filter">
        <button class="btn active" onclick="filter('All')"> Show All</button>
        <button class="btn" onclick="filter('Kosher')"> Kosher</button>
        <button class="btn" onclick="filter('Vegan')"> Vegan</button>
        <button class="btn" onclick="filter('Vegeterian')"> Vegeterian</button>
        <button class="btn" onclick="filter('Halal')"> Halal</button>
        <button class="btn" onclick="filter('DairyFree')"> Dairy Free</button>
        <button class="btn" onclick="filter('GlutenFree')"> GlutenFree</button>
        </div> );
    }
    filter(filter){

    }
}
 
export default DietaryFilter;
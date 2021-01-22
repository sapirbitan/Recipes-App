import React, { Component } from 'react';
function filter(_filter){
        console.log(_filter)
}
class DietaryFilter extends Component {
    state = {  }
    render() { 
        return (
            <div id="filter">
                <button className="btn active" onClick={filter.bind(this, "All")}> Show All</button>
                <button className="btn" onClick={filter.bind(this, "Kosher")}> Kosher</button>
                <button className="btn" onClick={filter.bind(this, "Vegan")}> Vegan</button>
                <button className="btn" onClick={filter.bind(this, "Vegeterian")}> Vegeterian</button>
                <button className="btn" onClick={filter.bind(this, "Halal")}> Halal</button>
                <button className="btn" onClick={filter.bind(this, "Dairy Free")}> Dairy Free</button>
                <button className="btn" onClick={filter.bind(this, "Gluten Free")}> GlutenFree</button>
            </div> );
    }

}
 
export default DietaryFilter;
import React, { Component } from 'react';
import Search from './Search';
import DietaryFilter from './DietaryFilter';
import Filters from './Filters';

class Main extends Component {
    state = { 
     }
    render() { 
        return(
            <div>
                <header className = "Main"> Sheffing From Scrap</header>
                <DietaryFilter/>
                <Filters/>
                <Search/>
            </div>
            )
    }
}
 
export default Main;

import React, { Component } from 'react';
class Search extends Component {
    state = {  }
    render() { 
        return(
            <div>
            <form>
                <label>
                    <input type="text" name="Search" />
                </label>
                    <input type="submit" value="Search" />
            </form>
            </div>

        )
    }
    search(){

    }
}
 
export default Search;
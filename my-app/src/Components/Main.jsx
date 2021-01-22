import React, { Component } from 'react';
import omlet_img from './OmletPic.PNG' 
class Main extends Component {
    state = { 
        inputValue: '',
     }
    render() { 
        return(
            <div>
                <header className = "Main"> Sheffing From Scrap</header>
                <img src = {omlet_img} width = "200" height = "100"/>
            </div>
            )
    }
}
 
export default Main;

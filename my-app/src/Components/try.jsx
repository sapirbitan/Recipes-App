import React, { Component } from 'react';
function HandleClick(){
    console.log("Clicked")
}
class Try extends Component {
    state = {  }
    render() { 
        return (<button onClick={HandleClick}>Click me </button>  );
    }

}
 
export default Try;
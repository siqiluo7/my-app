import React, { Component } from 'react';

class Button extends Component {

      constructor(props){
          super(props);
          this.state={
              clickState: false
          }
          this.handleClick=this.handleClick.bind(this);
         
      }
    
  handleClick(e){
        this.setState({clickState:true});
        console.log(this.state.clickState);
       
  }
render() {
    console.log(this.state.clickState);
    return (
        <div>
        <h1>{this.state.clickState?'true':'false'}</h1>
         <button onClick={this.handleClick}>Click me!!!!</button>
         </div>
    );
}
}

export default Button;
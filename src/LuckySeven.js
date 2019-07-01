import React, { Component } from 'react';



class LuckySeven extends Component {
    constructor(props){
       super(props);
       this.state={
          currNum: 0
       }
       this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){
         this.setState({currNum: Math.floor(Math.random()*10)});

    }
   render() {
       let buttons=<button onClick={this.handleClick}>Click me!</button>;
       let win=<p>you win!</p>;
       let result=(this.state.currNum===7?win:buttons);
       return (
            <div>
                <h1>{this.state.currNum}</h1>
                {result}
            </div>
       );
   }



}

export default LuckySeven;
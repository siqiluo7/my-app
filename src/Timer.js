import React,{ Component } from 'react';

class Timer extends Component {

 constructor(props){
        super(props);
        this.state={
           gameTime:0,
           score:0
        }
        this.makeTimer();
 }
 makeTimer(){
    setInterval(()=>{
      //  let rand=Math.floor(Math.random()*this.props.maxNumber);
     //   this.setState({gameTime:rand})
     let sand=this.state.gameTime;
     sand++;
     this.setState({gameTime:sand})

    },1000);
 }
 
 render() {
     return (
          <div>
              <h1>Game time is: {this.state.gameTime}</h1>
          </div>
     );
 }
      



}

export default Timer;
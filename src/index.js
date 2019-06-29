import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import foods from './foods';
import {choice, remove} from './helpers';
import * as serviceWorker from './serviceWorker';
 

    let fruits=foods();
    let picked= choice();
   
   
    


class Index extends Component{
    
    render() {
        
        let log1=<p>I'd like one {picked} ,please</p>;
        let log2=<p>Here you go: {picked}</p>;
         remove();
         let log3=<p>Delicious! May I have another?</p>;
         let after=remove(picked);
         let left;
         if(after===undefined){
            left=<p>we don't have any left</p>;
         }else{
           left=<p>Sure, then we have {after}left</p>;
         }
        return (
             <div>
                 {fruits}
                 <p>{log1}</p>
                 <p>{log2}</p>
                 <p>{log3}</p>
                 <p>{left}</p>
             </div>
        );
    }
}
ReactDOM.render(<Index/>,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

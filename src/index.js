import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pokedex from './Pokedex';
import * as serviceWorker from './serviceWorker';
   


function pickPokemon(from, number) {
    const result = [];
    let totalExperience = 0
    for (let i=1;i<number;i++) {
        result[i] = from[Math.floor(Math.random() * from.length)];
        totalExperience += result[i].base_experience;
    }
    return [result, totalExperience];
}


class Index extends Component{
   
    
   render() {
          let [results1, totalExperience1] =pickPokemon(Pokedex.defaultProps.pokemons, 4);
          let [results2, totalExperience2] =pickPokemon(Pokedex.defaultProps.pokemons, 4);
          let winner=((results1>results2)?0:-1);
       return (
            <div>
                <Pokedex background={"grey"} isWinner={winner === 0}  pokemons={results1}/>
                <Pokedex  pokemons={results2} isWinner={winner === -1} />
            </div>
       );
   }
}
ReactDOM.render(<Index/>,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.scss';


// function PokemonPicker(length){

//       let piker1=Math.floor(Math.random()*length);
//       let piker2=Math.floor(Math.random()*length);
//       let piker3=Math.floor(Math.random()*length);
//       let piker4=Math.floor(Math.random()*length);
//       return [piker1,piker2,piker3,piker4];
// }
let imgpreUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokedex extends Component {
    static defaultProps = {
        pokemons: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62, url:"" },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    }

    render() {
        
        let win=(this.props.isWinner==='win'?'You are the winner':'you lose the GAME');
        
  
        return (
            // <div className="pokePanel">{this.props.pokemons.map(p =>
            //     (<Pokecard id={p.id}
            //         name={p.name}
            //         type={p.type}
            //         base_experience={p.base_experience}
            //     />))}</div>
            
            <div className='pokePanel'>
            <p>{win}</p>
           
            {   
                
                this.props.pokemons.map(p=>(<Pokecard style={{backgroundColor: this.props.background}}id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>))
            }
            </div>
        );
    }
}


export default Pokedex;
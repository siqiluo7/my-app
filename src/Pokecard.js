import React, { Component } from 'react';
import './Pokecard.css';

let imgpreUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


class Pokecard extends Component {
    static defaultProps={
        id: 4, 
        name: 'Charmander', 
        type: 'fire', 
        base_experience: 62
    }
    
    render() {
        let imgUrl=imgpreUrl+this.props.id+'.png';
        return (
         <div className='pokecard' style={this.props.style}><p>id: {this.props.id}</p>
         <p>name: {this.props.name}</p>
         <img src={imgUrl} alt={this.props.name}/>
         <p>type: {this.props.type}</p>
         <p>base_experience: {this.props.base_experience}</p></div>
    );
    }


}
export default Pokecard;
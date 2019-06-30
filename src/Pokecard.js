import React, { Component } from 'react';
import './Pokecard.scss';

let imgpreUrl='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let addToThree=(number)=>number<=999?('00'+number).slice(-3):number;


class Pokecard extends Component {
    static defaultProps={
        id: 4, 
        name: 'Charmander', 
        type: 'fire', 
        base_experience: 62
    }
    
    render() {
        let imgUrl=imgpreUrl+addToThree(this.props.id)+'.png';
        console.log(imgUrl);
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
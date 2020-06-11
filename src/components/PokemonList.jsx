import React from 'react';

import Pokemon from './Pokemon.jsx';

class PokemonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    const pokemonList = [];
    const getSquirtle = fetch('https://pokeapi.co/api/v2/pokemon/7/')
      .then(res => res.json())
      .then(data => pokemonList.push(data));
    const getCharmander = fetch('https://pokeapi.co/api/v2/pokemon/4/')
      .then(res => res.json())
      .then(data => pokemonList.push(data));
    const getBulbasaur = fetch('https://pokeapi.co/api/v2/pokemon/1/')
      .then(res => res.json())
      .then(data => pokemonList.push(data));

    Promise.all([getSquirtle, getCharmander, getBulbasaur]).then(() =>
      this.setState({ list: pokemonList })
    );
  }

  render() {
    const pokemonItems = this.state.list.map(pokemon => (
      <Pokemon key={pokemon.name} attributes={pokemon} />
    ));

    return (
      <div>
        <h2>Choose a Pokémon.</h2>
        <ul>{pokemonItems}</ul>
      </div>
    );
  }
}

export default PokemonList;

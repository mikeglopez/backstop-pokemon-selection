import React from 'react';

import Pokemon from './Pokemon.jsx';

const PokemonList = props => {
  const pokemonItems = props.list.map(pokemon => (
    <Pokemon key={pokemon.name} attributes={pokemon} />
  ));

  if (props.random.name) {
    const pokemon = props.random;
    pokemonItems.push(<Pokemon key={pokemon.name} attributes={pokemon} />);
  }

  return <ul className='row px-0'>{pokemonItems}</ul>;
};

export default PokemonList;

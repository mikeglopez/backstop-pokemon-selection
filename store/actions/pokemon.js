export const FETCH_STARTER_POKEMON = 'FETCH_STARTER_POKEMON';
export const FETCH_RANDOM_POKEMON = 'FETCH_RANDOM_POKEMON';

export const fetchStarters = () => {
  return dispatch => {
    try {
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
        dispatch({
          type: FETCH_STARTER_POKEMON,
          pokemon: pokemonList
        })
      );
    } catch (err) {
      throw err;
    }
  };
};

export const fetchRandom = randNum => {
  return dispatch => {
    try {
      fetch(`https://pokeapi.co/api/v2/pokemon/${randNum}/`)
        .then(res => res.json())
        .then(data =>
          dispatch({
            type: FETCH_RANDOM_POKEMON,
            random: data
          })
        );
    } catch (err) {
      throw err;
    }
  };
};

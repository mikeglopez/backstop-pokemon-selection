import {
  FETCH_STARTER_POKEMON,
  FETCH_RANDOM_POKEMON
} from '../actions/pokemon';

const initialState = {
  starters: [],
  random: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARTER_POKEMON:
      return {
        ...state,
        starters: action.pokemon
      };
    case FETCH_RANDOM_POKEMON:
      return {
        ...state,
        random: action.random
      };

    default:
      return state;
  }
};

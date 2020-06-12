import React from 'react';
import { connect } from 'react-redux';

import PokemonList from '../components/PokemonList.jsx';
import Pokemon from '../components/Pokemon.jsx';
import { fetchStarters, fetchRandom } from '../../store/actions/pokemon';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getRandomPokemon = this.getRandomPokemon.bind(this);
  }

  componentDidMount() {
    this.props.fetchStarters();
  }

  getRandomPokemon() {
    const randNum = Math.floor(Math.random() * 151);
    this.props.fetchRandom(randNum);
  }

  render() {
    return (
      <div className='container'>
        <div className='row sticky-top bg-white'>
          <div className='col'>
            <h2 className='text-center'>Choose a Pokémon.</h2>
          </div>
        </div>
        <PokemonList list={this.props.list} random={this.props.random} />
        <button onClick={this.getRandomPokemon}>Random Pokémon</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.pokemon.starters,
  random: state.pokemon.random
});

export default connect(mapStateToProps, { fetchStarters, fetchRandom })(App);

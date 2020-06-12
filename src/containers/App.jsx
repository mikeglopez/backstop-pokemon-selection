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
    this.genRandomNumber = this.genRandomNumber.bind(this);
  }

  componentDidMount() {
    this.props.fetchStarters();
  }

  genRandomNumber() {
    const randNum = Math.floor(Math.random() * (151 - 1) + 1);
    const starters = [7, 4, 1];

    if (starters.includes(randNum)) {
      this.genRandomNumber();
    } else {
      return randNum;
    }
  }

  getRandomPokemon() {
    const randNum = this.genRandomNumber();
    if (typeof randNum === 'number') {
      this.props.fetchRandom(randNum);
    }
  }

  render() {
    return (
      <div>
        <div
          className='row bg-dark text-white py-3 mx-0'
          style={styles.stickyHeader}
        >
          <div className='col'>
            <h2 className='text-center'>Choose a Pokémon</h2>
          </div>
        </div>
        <div className='container' style={{ marginTop: 76 }}>
          <div className='row'>
            <div className='col'>
              <PokemonList list={this.props.list} random={this.props.random} />
            </div>
          </div>
          <div className='row justify-content-center mb-5'>
            <div className='col-sm text-center'>
              <button
                type='button'
                className='btn btn-danger'
                onClick={this.getRandomPokemon}
              >
                Random Pokémon
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  stickyHeader: { position: 'fixed', top: 0, width: '100%', zIndex: 100 }
};

const mapStateToProps = state => ({
  list: state.pokemon.starters,
  random: state.pokemon.random
});

export default connect(mapStateToProps, { fetchStarters, fetchRandom })(App);

import React from 'react';
import ReactDOM from 'react-dom';

import PokemonList from './components/PokemonList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <PokemonList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

import React, { Component } from 'react';
import Header from './Header'


const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
      <button className="remove-player" onClick={() => props.handleRemovePlayer(props.id)}>✖</button>
        { props.name }
      </span>

      <Counter score={props.score} />
    </div>
  );
}

class Counter extends Component {
  state = {
    score: 0
  }
  incrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score + 1
    }))
  }
  decrementScore = () => {
    this.setState(prevState => {
      return {
        score: prevState.score - 1
      }
    })
  }
  render () {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

class App extends Component {
  state = {
    players: [
        {
          name: "Guil",
          id: 0
        },
        {
          name: "Treasure",
          id: 1
        },
        {
          name: "Ashley",
          id: 2
        },
        {
          name: "James",
          id: 3
        }
      ]
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }))
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard"
          totalPlayers={this.state.players.length}
        />
        {this.state.players.map(player =>
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer = {this.handleRemovePlayer}
          />
        )}
      </div>
    );
  }

}

export default App;

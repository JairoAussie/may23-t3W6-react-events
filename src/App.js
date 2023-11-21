// Page that lets us increase or decrease 
// how many Pokemon are on screen
// App components needs to:
// - Keep track of how many Pokemon to show
// - iterate over a single, DRY modular component
// - Button to increase Pokemon count
// - Button to decrease Pokemon count
import React from "react";
import Pokemon from "./Pokemon";

class App extends React.Component{
  constructor(){
    super();

    // start with at least one pokemon on screen
    this.state = {
      pokemonCount: 5
    }
  }

  exampleFunction(){
    console.log("Hello world, from button click")
  }

  decreasePokemonCount(currentCount){
    if (currentCount > 0) {
      this.setState({pokemonCount: currentCount - 1});
    }
    
  }

  increasePokemonCount(currentCount){
    this.setState({pokemonCount: currentCount + 1});
  }

  render(){
    return (
      <div>
        <h1>Pokemon page</h1>
        <button onClick={() => {this.decreasePokemonCount(this.state.pokemonCount)}}>Decrease Pokemon count</button>
        <button onClick={() => {this.increasePokemonCount(this.state.pokemonCount)}}>Increase Pokemon count</button>
        <Pokemon />
      </div>
    )
    
  }
}

export default App;

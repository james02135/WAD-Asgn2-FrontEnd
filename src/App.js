import React, { Component } from "react";
import Header from "./components/header/";



class App extends Component {
  render() {
    const sample = {
      brewer: "Sierra Nevada" ,
      beerName: "Pale Ale",
      abv: "4.2",
      picture: { thumbnail: "./profile.png" }
    };

    const contacts = [sample, sample, sample, sample, sample];

    return (
      <div className="jumbotron">
        <Header noBeers={10} />
        <FilterControls />
        <beerList  beers={beers} />
      </div>
    );
  }
}

export default App;
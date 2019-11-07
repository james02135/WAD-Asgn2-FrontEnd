import React, { Component } from "react";
import Header from "./components/header/";
import BeerList from "./components/beerList/";
import FilterControls from "./components/filterControls/";
import IPA from '../src/pictures/IPA.jpg'


class App extends Component {
  render() {
    const sample = {
      category: 'Ale',
      style: 'IPA',
      abv: 6,
      color: 'Light yellow to Amber',
      picture: {thumbnail: {IPA}}
    }

    const beers = [sample, sample, sample, sample, sample];

    return (
      <div className="jumbotron">
        <Header noBeers={10} />
        <FilterControls />
        <BeerList beers={beers} />
      </div>
    );
  }
}

export default App;


import React, { Component } from "react";
import Beers from "../beers/";
import './beerList.css';

export default class BeerList extends Component {
  render() {
    const beerCards = this.props.beers.map(c => (
    <Beers 
        key={c.name} 
        beers={c} 
        deleteHandler={this.props.deleteHandler}
        editHandler={this.props.editHandler}
    />
    ));
    return (
      <div className="container-fluid beers bg-info">
        <div className="row">{beerCards}</div>
      </div>
    );
  }
}


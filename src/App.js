import React, { Component } from "react";
import Header from "./components/header/";
import BeerList from "./components/beerList/";
import FilterControls from "./components/filterControls/";
import api from "./dataStore/stubAPI"; 
import _ from "lodash";
import { Fragment } from "react";

class App extends Component {
    state = { search: "", category: "all" };
    handleChange = (type, value) => {
        type === "name"
        ? this.setState({ search: value })
        : this.setState({ category: value });
    };
    deleteBeer = (key) => {
        api.delete(key); 
        this.setState({});                          
    };
    render() {
        let beers = api.getAll();
        let filteredBeers = beers.filter(c => {
        const name = `${c.name}`;
        return name.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
        });
        filteredBeers =
        this.state.category === "all"
            ? filteredBeers
            : filteredBeers.filter(c => c.category === this.state.category);
        let sortedBeers = _.sortBy(filteredBeers, c => c.name);
        return (
            <Fragment>
              <Header noBeers={sortedBeers.length} />
              <FilterControls onUserInput={this.handleChange} />
              <BeerList
                beers={sortedBeers}
                deleteHandler={this.deleteBeer}
              />
            </Fragment>
        );
    }
}

export default App;


import React, { Component, Fragment } from "react";
import Header from "./components/header/";
import BeerList from "./components/beerList/";
import FilterControls from "./components/filterControls/";
import api from "./dataStore/stubAPI"; 
import _ from "lodash";

class App extends Component {
    state = { search: "", category: "all" };
    handleChange = (type, value) => {
        type === "name"
        ? this.setState({ search: value })
        : this.setState({ category: value });
    };
    deleteBeer = (id) => {
        api.delete(id); 
        this.setState({});                          
    };
    addBeer = (category, name, abv, color, description, examples) => {
        api.addBeer(category, name, abv, color, description, examples);
        this.setState({});
    }
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
        let sortedBeers = _.sortBy(filteredBeers, c => c.id);
        return (
            <Fragment>
              <Header noBeers={sortedBeers.length} />
              <FilterControls 
                onUserInput={this.handleChange}
                addNewBeer={this.addBeer} />
              <BeerList
                beers={sortedBeers}
                deleteHandler={this.deleteBeer}
              />
            </Fragment>
          );
    }
}

export default App;


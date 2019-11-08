import React, { Component } from "react";
import Header from "./components/header/";
import BeerList from "./components/beerList/";
import FilterControls from "./components/filterControls/";
//import request from "superagent";
import api from "./dataStore/stubAPI";
import _ from "lodash"; 

class App extends Component {
    
    state = { search: "", name: "all" };
    handleChange = (type, value) => {
        type === "name"
        ? this.setState({ search: value })
        : this.setState({ gender: value });
    };
        
    
    // componentDidMount() {
    //     request.get("https://randomuser.me/api/?results=50").end((error, res) => {
    //     if (res) {
    //         let { results: contacts } = JSON.parse(res.text);
    //         api.initialize(contacts);
    //         this.setState({});
    //     } else {
    //         console.log(error);
    //     }
    //     });
    // }
    deleteContact = (key) => {
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
        <div className="jumbotron">
            <Header noBeers={sortedBeers.length} />
            <FilterControls 
            onUserInput={this.handleChange}
            />
            <BeerList beers={sortedBeers}
            deleteHandler={this.deleteBeers} />
        </div>
        );
    }
}

export default App;


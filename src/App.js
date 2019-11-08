import React, { Component } from "react";
import Header from "./components/header/";
import BeerList from "./components/beerList/";
import FilterControls from "./components/filterControls/";
//import request from "superagent";
import api from "./dataStore/stubAPI"; 

class App extends Component {
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
    render() {
        let beers = api.getAll();
        return (
        <div className="jumbotron">
            <Header noBeers={beers.length} />
            <FilterControls />
            <BeerList beers={beers} />
        </div>
        );
    }
}

export default App;


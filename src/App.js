import React, { Component } from "react";
import Header from "./components/header/";
import BeerList from "./components/beerList/";
import FilterControls from "./components/filterControls/";
//import addBeer from "./components/addBeerForm/";
import axios from "axios";
import _ from "lodash";
import * as server from './server';
//import { Redirect } from 'react-router-dom';

export class App extends Component {

    state = { search: "", category: "all", beers: [], reviews: [{}], login:false };
  
    handleChange = (type, value) => {
        type === "name"
        ? this.setState({ search: value })
        : this.setState({ category: value });
    };

    updateBeer = async ({_id, color, abv}) => {
      await axios.post(`http://localhost:8080/updateBeer/${_id}`, { color, abv }).then(res=> {
        console.log(res);
        console.log(res.data);
      });
      this.getBeers();
      window.location.reload();
    };
    
    deleteBeer = async (_id) => {
      await axios.delete(`http://localhost:8080/deleteBeer/${_id}`).then(res=> {
        console.log(res);
        console.log(res.data)
      });
      this.getBeers();
    };

    getBeers = async () => {
    let {data} = await axios.get('http://localhost:8080/beers/');
    const beers = data.collections;
    this.setState({beers: beers});
    }

    async componentDidMount () {
      await this.getBeers();
      this._isMounted=true
      try{
            const resp = await server.getAll();
            if (this._isMounted){
            this.setState({
                     reviews: resp,
                     login: false,
                   });
                  }

         } catch (e){
           if (this._isMounted) this.setState({
                    login: true
                  });
         }
    };

    render() {
       // const login  = this.state;
        let beers = this.state.beers;
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
            <div>
              <div>
              <Header noBeers={sortedBeers.length} />
              </div>
              <div>
              <FilterControls 
                onUserInput={this.handleChange}
                addNewBeer={this.addBeer} />
              </div>
              <div>
              <BeerList
                beers={sortedBeers}
                deleteHandler={this.deleteBeer}
                editHandler={this.updateBeer}/>
              </div>
              {/* {login && (<Redirect to='/login'/>)} */}
            </div>
          );
    }
}

export default App;


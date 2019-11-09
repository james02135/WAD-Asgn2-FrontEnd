import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import request from "superagent";
import api from "./dataStore/stubAPI"; 
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";
import BeerPage from "./components/beerPage/beerPage";

class Router extends Component {
  componentDidMount() {
    request.get("http://localhost:3000/beers").end((error, res) => {
      if (res) {
        let { results: beers } = JSON.parse(res.text);
        api.initialize(beers);
        this.setState({});
      } else {
        console.log(error);
      }
    });
  }

  render() {
    return (
       <BrowserRouter>
        <div className="jumbotron">
          <div className="container-fluid ">
            <Switch>
              <Route path="/beers/:id" component={BeerPage} />
              <Route exact path="/" component={App} />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Router />, document.getElementById("root"));
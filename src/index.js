import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";
import BeerPage from "./components/beerPage";
import ReviewHelp from "../src/components/beerReview/helpPage";
import AddBeer from "../src/components/addBeerForm/index"


class Router extends Component {
  render() {
    return (
       <BrowserRouter>
        <div className="jumbotron">
          <div className="container-fluid ">
            <Switch>
              <Route path="/beers/:id" component={BeerPage} />
              <Route exact path="/" component={App} />
              <Route path="/help" component={ReviewHelp}/>
              <Route path="/addBeer" component={AddBeer}/>
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Router />, document.getElementById("root"));
import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import api from "../dataStore/stubAPI"; 
import BeerPublic from "./beerPublic";
import { Route, Link } from "react-router-dom";
import BeerReview from "./beerReview/index";

const BeerPage = props => {
  const { id } = props.match.params;
  const beers = api.findBeer(id);
  return (
    <Fragment>
        <Fragment>
          <BeerPublic beers={beers} />         
        </Fragment>
        <Fragment>
        <Link className="btn btn-primary active" to={`/beers/${id}/review`}>Review the Beer</Link>
        <Route path={"/beers/:id/review"} component= {BeerReview}/> 
        </Fragment>
    </Fragment>
  );
};

export default withRouter(BeerPage);
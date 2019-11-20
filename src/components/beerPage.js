import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import api from "../dataStore/stubAPI"; 
import BeerPublic from "./beerPublic";
import { Route, Link } from "react-router-dom";
import BeerReview from "./beerReview";

const BeerPage = props => {
  const { id } = props.match.params;
  const beers = api.findBeer(id);
  const beerReview = api.findBeerReview(id);
  return (
    <Fragment>
      {beers ? (
        <Fragment>
          <BeerPublic beers={beers} />  
          {!props.history.location.pathname.endsWith("/private") && (
            <Link class="btn btn-primary active" to={`/beers/${id}/private`}>Review the Beer</Link>
          )}
          <Route path={`/beers/:id/private`} 
              render={ (props) => 
                <BeerReview {...props} review={beerReview} /> } 
          />         
        </Fragment>
      ) : (
        <p>Waiting for beer details</p>
      )}
    </Fragment>
  );
};

export default withRouter(BeerPage);
import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import api from "../dataStore/stubAPI"; 
import BeerPublic from "./beerPublic";
import BeerPrivate from "./beerPrivate";
import { Route, Link } from "react-router-dom";

const BeerPage = props => {
  const { id } = props.match.params;
  const beers = api.find(id);
  return (
    <Fragment>
      {beers ? (
        <Fragment>
          <BeerPublic beers={beers} />  
          {!props.history.location.pathname.endsWith("/private") && (
            <Link class="btn btn-primary active" to={`/beers/${id}/private`}>See Private Review</Link>
          )}
          <Route path={`/beers/:id/private`} 
              render={ (props) => <BeerPrivate {...props} user={beers} /> } />         
        </Fragment>
      ) : (
        <p>Waiting for beer details</p>
      )}
    </Fragment>
  );
};

export default withRouter(BeerPage);
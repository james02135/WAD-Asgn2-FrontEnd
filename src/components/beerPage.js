import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import api from "../dataStore/stubAPI"; 
import BeerPublic from "./beerPublic";


const BeerPage = props => {
  const { id } = props.match.params;
  const beers = api.find(id);
  return (
    <Fragment>
      {beers ? (
        <Fragment>
          <BeerPublic user={beers} />           
        </Fragment>
      ) : (
        <p>Waiting for beer details</p>
      )}
    </Fragment>
  );
};

export default withRouter(BeerPage);
import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import api from "../../dataStore/stubAPI"; 
import BeerDetails from "../beerDetails/beerDetails";
import Name from "../beerDetails/index"

const BeerPage = props => {
  const { id } = props.match.params;
  const beers = api.find(id);
  return (
    <Fragment>
      {beers ? (
        <Fragment>
          <BeerDetails user={beers} />           
          <Name user={beers} />
        </Fragment>
      ) : (
        <p>Waiting for contact details</p>
      )}
    </Fragment>
  );
};

export default withRouter(BeerPage);
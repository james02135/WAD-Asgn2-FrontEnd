import React, { Fragment } from "react";
// import "../../fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ beers }) => {
  const BeerProfile = `${beers.name}`;
  return (
    <Fragment>
      <h4>
        <span> {BeerProfile}</span>
      </h4>
      <h4>
        <span> {beers.description}</span>
      </h4>
      <h4>
        <span> Noted Examples: {beers.examples}</span>
      </h4>
    </Fragment>
  );
};
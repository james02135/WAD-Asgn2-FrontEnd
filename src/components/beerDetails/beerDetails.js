import React, { Fragment } from "react";
import { capitalize } from "../../util";

export default ({ user }) => {
  const BeerDetails = capitalize(
    `${user.category}, ${user.name}, ${user.abv}`
  );
  return (
    <Fragment>
      <h4>
        <span> {BeerDetails}</span>
      </h4>
      <h4>
        <span> {user.category}</span>
      </h4>
      <h4>
        <span> {user.name}</span>
      </h4>
      <h4>
        <span> {user.abv}</span>
      </h4>
    </Fragment>
  );
};
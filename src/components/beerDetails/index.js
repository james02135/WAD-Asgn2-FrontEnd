import React, { Fragment } from "react";
import { capitalize } from "../../util";
import "./beerDetails.css";
import { Link } from "react-router-dom";
import BeerDetails from "../beerDetails/beerDetails"

export default ({ user }) => {
  const Name = capitalize(`${user.name}`);
  return (
    <Fragment>
      <div className="row">
      <div className="col-2">
        <Link to="/">
          <span>Back</span>
        </Link>
        </div>
        <div className="col-3 offset-2">
          <h2>{Name}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <img src={user.picture.large} className="beer" alt={Name} />
        </div>
        <div className="col-4">
          <BeerDetails user={user} />
        </div>
      </div>
    </Fragment>
  );
};

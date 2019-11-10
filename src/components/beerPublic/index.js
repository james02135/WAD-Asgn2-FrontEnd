import React, { Fragment } from "react";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./beerPublic.css";
import { Link } from "react-router-dom";
import BeerProfile from "./beerProfile";


export default ({ beers }) => {
  const Name = `${beers.name}`;
  return (
    <Fragment>
      <div className="row">
      <div className="col-2">
        <Link to="/">
          <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="3x" />
          <span>Back</span>
        </Link>
        </div>
        <div className="col-3 offset-2">
          <h2>{Name}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <img src={beers.picture.thumbnail} className="beer" alt={Name} />
        </div>
        <div className="col-4">
          <BeerProfile beers={beers} />
        </div>
      </div>
    </Fragment>
  );
};

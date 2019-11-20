import React from "react";
import "./beerPrivate.css";
import "../../fontawesome";


export default ({ review }) => {
  return (
    <div className="row">
      <div className="col-12">
        <ul className="specs">
          <li>
            <span>Review</span>
            <dl>
              <dt>Aroma</dt>
              <dd>1-10: </dd>
              <dt>Color</dt>
              <dd>1-10: </dd>
              <dt>Mouthfeel</dt>
              <dd>1-10: </dd>
              <dt>Flavor</dt>
              <dd>1-10: </dd>
              <dt>Overall</dt>
              <dd>1-10: </dd>
            </dl>
          </li>
          <li>
            <span>Your Scores</span>
            <dt>Aroma</dt>
            <dd>7</dd>
            <dt>Color</dt>
            <dd>6</dd>
            <dt>Mouthfeel</dt>
            <dd>6</dd>
            <dt>Flavor</dt>
            <dd>7</dd>
            <dt>Overall</dt>
            <dd>6.5</dd>
          </li>
        </ul>
      </div>
    </div>
  );
};

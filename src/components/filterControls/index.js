import React, { Component } from "react";
import "./filterControls.css"

export default class FilterControls extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row bg-warning">
          <div className="col-md-12">
            <h4>
              <span>Filter </span>
              <input type="text" placeholder="Name Search" />
              <span> Style: </span>
              <select id="style">
                <option value="all">All</option>
                <option value="ale">Ale</option>
                <option value="lager">Lager</option>
              </select>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
import React, { Component } from "react";
import "./beers.css";
import "../../fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Beers extends Component {
  render() {
    return (
      <div className="col-sm-3">
        <div className="card">
          <img
            className="card-img-tag center "
            alt={this.props.beers.name}
            src={this.props.beers.picture.thumbnail}
          />
          <div className="card-body">
            <h5 className="card-title ">
              {`${this.props.beers.name}`}
            </h5>
            <p key="category">
              <span> {this.props.beers.category}</span>
            </p>
            <p key="style">
              <span> {this.props.beers.style}</span>
            </p>
            <p key="ccolor">
              <span> {this.props.beers.color}</span>
            </p>
            <p key="abv">
              <FontAwesomeIcon icon={["fas", "percentage"]} />
              <span> {this.props.beers.abv}</span>
            </p>
          </div>
          <div className="card-footer">
            <div
              className="btn-group d-flex btn-group-justified"
              role="group"
              aria-label="..."
            >
              <button type="button" className={"btn btn-default w-100"}>
                {" Edit "}
              </button>
              <button type="button" className={"btn btn-danger w-100"}>
                {"Delete"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Beers;
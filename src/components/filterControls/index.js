import React, { Component } from "react";
import "./filterControls.css";
import { Route, Link } from "react-router-dom";
import "../addBeerForm/index"
import AddBeer from "../addBeerForm/index";

export default class FilterControls extends Component {
    handleChange = (e, type, value) => {
        e.preventDefault();
        this.props.onUserInput(type, value);
    };
    handleTextChange = e => {
        this.handleChange(e, "name", e.target.value);
    };
    handleCategoryChange = e => {
        this.handleChange(e, "category", e.target.value);
    };
    render() {
        return (
        <div className="container-fluid">
            <div className="row bg-warning">
            
                <h4>

                <span className="col-md-2">Filter </span>
                <input
                    className="col-md-3"
                    type="text"
                    placeholder="Name Search"
                    onChange={this.handleTextChange}
                />

                <span className="col-md-2"> Category: </span>
                <select
                    className="col-md-2"
                    type="category"
                    onChange={this.handleCategoryChange}
                >
                    <option value="all">All</option>
                    <option value="Ale">Ale</option>
                    <option value="Lager">Lager</option>
                </select>

                <span className="col-md-3"> 
                <Link className="btn btn-light active float-right"
                    to={'/addBeer'}>Add A New Beer Style</Link> 
                <Route path="/addBeer" component= {AddBeer} />
                </span>
                </h4>
            </div>
        </div>
        );
    }

}
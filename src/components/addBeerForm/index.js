import React, { Component } from "react";
import "./beerForm.css";

export default class Form extends Component {
    state = { category: '', name: '', abv: '', color: '', description: '', examples: ''};
    render() {
        return (
            <form  className="form bg-dark text-light">
                    <h3>Add a New Beer</h3>
                    <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="category"></input>
                    </div>
                    <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="name"></input>
                    </div>
                    <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="abv"></input>
                    </div>
                    <div className="form-group">
                        <input type="text"
                        className="form-control"
                        placeholder="color"></input>
                    </div>
                    <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="description"></input>
                    </div>
                    <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="examples"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
            </form>
        );
    }
};
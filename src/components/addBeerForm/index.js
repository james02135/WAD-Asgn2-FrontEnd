import React, { Component } from "react";
import "./beerForm.css";
import axios from "axios";
import { Link } from "react-router-dom";


export default class Form extends Component {
    state = { category: '', name: '', abv: '', color: '', description: '', examples: '', picture: ''};

    handleCategoryChange = e => this.setState({ category: e.target.value });
    handleNameChange = e => this.setState({ name: e.target.value });
    handleABVChange = e => this.setState({ abv: e.target.value });
    handleColorChange = e => this.setState({ color: e.target.value });
    handleDescriptionChange = e => this.setState({ description: e.target.value });
    handleExamplesChange = e => this.setState({ examples: e.target.value });
    handlePictureChange = e => this.setState({ picture: e.target.value });

    addBeer = async () => {
        const category = this.state.category;
        const name = this.state.name;
        const abv = this.state.abv;
        const color = this.state.color;
        const description = this.state.description;
        const examples = this.state.examples;
        const picture = this.state.picture;
        await axios.post('http://localhost:8080/addBeer', {category, name, abv, color, description, examples, picture}).then(res=> {
          console.log(res);
          console.log(res.data);
          console.log("got here");
        });
    };

    render() {
        return (
            <form  className="form bg-dark text-light">
                    <h3>Add a New Beer Style</h3>
                    <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="category"
                        value={this.state.category}
                        onChange={this.handleCategoryChange}></input>
                    </div>
                    <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleNameChange}></input>
                    </div>
                    <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="abv"
                        value={this.state.abv}
                        onChange={this.handleABVChange}></input>
                    </div>
                    <div className="form-group">
                        <input type="text"
                        className="form-control"
                        placeholder="color"
                        value={this.state.color}
                        onChange={this.handleColorChange}></input>
                    </div>
                    <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="description"
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}></input>
                    </div>
                    <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="examples"
                        value={this.state.examples}
                        onChange={this.handleExamplesChange}></input>
                    </div>
                    <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="picture"
                        value={this.state.picture}
                        onChange={this.handlePictureChange}></input>
                    </div>
                    <div className="btn-group btn-group-justified"
                    role="group"
                    aria-label="..."
                    >
                    <button style= {{width:430}} type="submit" className="btn btn-primary" onClick={this.addBeer}>Add</button>
                    <Link to="/"><button style= {{width:430}} type="cancel" className="btn btn-warning">Cancel</button></Link>
                    </div>
            </form>
        );
    }
};
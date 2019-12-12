import React, { Component, Fragment } from "react";
import "./beers.css";
import buttons from "../../config/mainButtons";
import { Link } from "react-router-dom";



export default class Beers extends Component {
  state = {
    status: "",
    _id: this.props.beers._id,
    category: this.props.beers.category,
    name: this.props.beers.name,
    picture: this.props.beers.picture,
    abv: this.props.beers.abv,
    color: this.props.beers.color,
    previousDetails: {
      category: this.props.beers.category,
      name: this.props.beers.name,
      picture: this.props.beers.picture,
      abv: this.props.beers.abv,
      color: this.props.beers.color,
    },
  };

  //saving a change
  handleSave = async e => {
    e.preventDefault();
    const obj = {
      abv: this.state.abv,
      color: this.state.color
    };
    console.log(obj);
    this.props.editHandler(this.state);    
  }; 
  
  // confirming a deletion
  handleConfirm = async (e) => {
    e.preventDefault();
    this.props.deleteHandler(this.state._id);
  };

  // cancels the editing
  handleCancel = () => {
    let { name, picture, abv, color } = this.state.previousDetails;
    this.setState({ status: "", name, picture, abv, color });
  };

  handleABVChange = e => this.setState({ abv: e.target.value });

  handleColorChange = e => this.setState({ color: e.target.value });

  handleDelete = () =>  this.setState({ status : 'del'} );

  handleEdit = () => this.setState({ status: "edit" });

  render() {
    let activeButtons = buttons.normal;
    let leftButtonHandler = this.handleEdit;
    let rightButtonHandler = this.handleDelete;
    let cardColor = "bg-white";

    if (this.state.status === "edit") {
      cardColor = "bg-primary";
      activeButtons = buttons.edit;
      leftButtonHandler = this.handleSave;
      rightButtonHandler = this.handleCancel;
    } else if (this.state.status === 'del' ) {
      cardColor = "bg-warning";
      activeButtons = buttons.delete;
      leftButtonHandler = this.handleCancel;
      rightButtonHandler = this.handleConfirm;
    }

    const placeholder = (this.props.beers.picture) ? this.props.beers.picture.thumbnail : '';

    return (
      <div className="col-sm-3">
      <div className={`card  ${cardColor}`}>
        <Link
         to={`/beers/${this.props.beers.name}`}>
        <img
            className="card-img-tag center "
            alt={this.props.beers.name}
            src={placeholder}
          />
        </Link>
          <div className="card-body">
          <h5 className="card-title ">
          {`${this.props.beers.name}`}
          </h5>
            {this.state.status === "edit" ? (
              <Fragment>
                <p>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.abv}
                    onChange={this.handleABVChange}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.color}
                    onChange={this.handleColorChange}
                  />
                </p>
              </Fragment>
            ) : (
              <Fragment>
                <p>
                  <span> {this.props.beers.abv} </span>
                </p>
                <p>
                  <span> {this.props.beers.color} </span>
                </p>
              </Fragment>
            )}
          </div>
          <div className="card-footer">
            <div
              className="btn-group d-flex btn-group-justified"
              role="group"
              aria-label="..."
            >
              <button
                type="button"
                className={"btn w-100 " + activeButtons.leftButtonColor}
                onClick={leftButtonHandler}
              >
                {activeButtons.leftButtonVal}
              </button>
              <button
                type="button"
                className={"btn w-100 " + activeButtons.rightButtonColor}
                onClick={rightButtonHandler}
              >
                {activeButtons.rightButtonVal}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

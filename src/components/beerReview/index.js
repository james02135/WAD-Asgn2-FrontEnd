import React, {Component, Fragment} from "react";
import "./beerReview.css";
import Help from "./helpPage";
import { Route, Link } from "react-router-dom";
import api from "../../dataStore/stubAPI";
import reviewButtons from "../../config/reviewButtons";


export default class BeerReview extends Component {
    state = {
        status: "",
        name: this.props.name,
        aroma: this.props.aroma,
        mouthfeel: this.props.mouthfeel,
        color: this.props.color,
        flavor: this.props.flavor,
        comments: this.props.comments,
        previousDetails: {
            name: this.props.name,
            aroma: this.props.aroma,
            mouthfeel: this.props.mouthfeel,
            color: this.props.color,
            flavor: this.props.flavor,
            comments: this.props.comments,
        }
    };

    handleEdit = () => this.setState({ status: "edit" });

    handleSave = e => {
          e.preventDefault();
          let updatedName = this.state.name;
          let updatedAroma = this.state.aroma;
          let updatedMouthfeel = this.state.mouthfeel;
          let updatedColor = this.state.color;
          let updatedFlavor = this.state.flavor;
          let updatedComments = this.state.comments;
          if (!updatedName || !updatedAroma || !updatedColor || !updatedMouthfeel || !updatedFlavor || !updatedComments) {
          return;
          }
          let { name, aroma, mouthfeel, color, flavor, comments } = this.state;
          this.setState({ status: "", previousDetails: { name, aroma, mouthfeel, color, flavor, comments } });
          api.updateBeer(this.state.previousDetails.name, updatedName, updatedAroma, updatedMouthfeel, updatedColor, updatedFlavor, updatedComments);
    };    

    handleCancel = () => {
      let { name, aroma, mouthfeel, color, flavor, comments } = this.state.previousDetails;
      this.setState({ status: "", name, aroma, mouthfeel, color, flavor, comments });
    };

    handleNameChange = e => this.setState({ name: e.target.value });
    handleAromaChange = e => this.setState({ aroma: e.target.value });
    handleMouthfeelChange = e => this.setState({ mouthfeel: e.target.value });
    handleColorChange = e => this.setState({ color: e.target.value });
    handleFlavorChange = e => this.setState({ flavor: e.target.value });
    handleCommentsChange = e => this.setState({ comments: e.target.value });

    handleDelete = () =>  this.setState({ status : 'del'} );

    handleConfirm = (e) => {
      e.preventDefault();
      this.props.deleteHandler(this.state.name);
    };

    render() {
        let activeButtons = reviewButtons.normal;
        let leftButtonHandler = this.handleSave;
        let rightButtonHandler = this.handleEdit;
        if (this.state.status === "edit") {
          activeButtons = reviewButtons.edit;
          leftButtonHandler = this.handleSave;
          rightButtonHandler = this.handleCancel;
        } else if (this.state.status === 'del' ) {
          activeButtons = reviewButtons.delete;
          leftButtonHandler = this.handleCancel;
          rightButtonHandler = this.handleConfirm;
        }
        return (
            <div>   
            <Link to="/help">Review Help</Link>
            <form  className="form bg-dark text-light">
                <Fragment>
                    <h3>Add a New Beer Review</h3>
                </Fragment>
                 
                <Fragment>
                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.handleNameChange}
                                placeholder="Name">
                            </input>
                        </div>

                        <div className="form-group">
                        <input type="text"
                            className="form-control"
                            value={this.state.aroma}
                            onChange={this.handleAromaChange}
                            placeholder="Aroma (1-10)"></input>
                        </div>
            

                        <div className="form-group">
                        <input type="text"
                            className="form-control"
                            value={this.state.mouthfeel}
                            onChange={this.handleMouthfeelChange}
                            placeholder="Mouthfeel (1-10)"></input>
                        </div>

                        <div className="form-group">
                        <input type="text"
                            className="form-control"
                            value={this.state.color}
                            onChange={this.handleColorChange}
                            placeholder="Color (1-10)"></input>
                        </div>

                        <div className="form-group">
                            <input type="text"
                            className="form-control"
                            value={this.state.flavor}
                            onChange={this.handleFlavorChange}
                            placeholder="Flavor (1-10)"></input>
                        </div>

                        <div className="form-group">
                        <textarea class="form-control" rows="5"
                            value={this.state.comments}
                            onChange={this.handleCommentsChange} 
                            placeholder="Comments: "></textarea>
                        </div>
                </Fragment>
               
                    <Fragment>
                    <p>
                      <span> {this.props.name}</span>
                    </p>
                    <p>
                      <span> {this.props.aroma} </span>
                    </p>
                    <p>
                      <span> {this.props.mouthfeel} </span>
                    </p>
                    <p>
                      <span> {this.props.color} </span>
                    </p>
                    <p>
                      <span> {this.props.flavor} </span>
                    </p>
                    <p>
                      <span> {this.props.comments} </span>
                    </p>
                </Fragment>
                
                <Fragment>
                        <div
                            className="btn-group d-flex btn-group-justified"
                            role="group"
                            aria-label="...">
                            <button
                                type="button"
                                className={"btn w-100 " + activeButtons.leftButtonColor}
                                onClick={leftButtonHandler}>
                                {activeButtons.leftButtonVal}
                            </button>
                            <button
                                type="button"
                                className={"btn w-100 " + activeButtons.rightButtonColor}
                                onClick={rightButtonHandler}>
                                {activeButtons.rightButtonVal}
                            </button>
                        </div>
                </Fragment>
            </form>
            <div>
                <Route path="/help" component= {Help} />
            </div>
            
            </div>
        
        );
    }
};
import React, {Component} from "react";
import "./beerReview.css";
import Help from "./helpPage";
import { Route, Link } from "react-router-dom";
//import api from "../../dataStore/stubAPI";
//import buttons from "../../config/configButtons";


export default class BeerReview extends Component {
    // state = {
    //     status: "",
    //     aroma: this.props.beerReview.aroma,
    //     mouthfeel: this.props.beerReview.mouthfeel,
    //     color: this.props.beerReview.color,
    //     flavor: this.props.beerReview.flavor,
    //     comments: this.props.beerReview.comments,
    //     previousDetails: {
    //         aroma: this.props.beerReview.aroma,
    //         mouthfeel: this.props.beerReview.mouthfeel,
    //         color: this.props.beerReview.color,
    //         flavor: this.props.beerReview.flavor,
    //         comments: this.props.beerReview.comments,
    //     }
    // };
    // handleEdit = () => this.setState({ status: "edit" });
    // handleSave = e => {
    //       e.preventDefault();
    //       let updatedAroma = this.state.aroma.trim();
    //       let updatedMouthfeel = this.state.mouthfeel.trim();
    //       let updatedColor = this.state.color.trim();
    //       let updatedFlavor = this.state.flavor.trim();
    //       let updatedComments = this.state.comments.trim();
    //       if (!updatedAroma || !updatedColor || !updatedMouthfeel || !updatedFlavor || !updatedComments) {
    //       return;
    //       }
    //       let { aroma, mouthfeel, color, flavor, comments } = this.state;
    //       this.setState({ status: "", previousDetails: { aroma, mouthfeel, color, flavor, comments } });
    //       api.update(this.state.previousDetails.id, updatedAroma, updatedMouthfeel, updatedColor, updatedFlavor, updatedComments);
    // };    

    // handleCancel = () => {
    //   let { id, aroma, mouthfeel, color, flavor, comments } = this.state.previousDetails;
    //   this.setState({ status: "", id, aroma, mouthfeel, color, flavor, comments });
    // };

    // handleAromaChange = e => this.setState({ aroma: e.target.value });
    // handleMouthfeelChange = e => this.setState({ mouthfeel: e.target.value });
    // handleColorChange = e => this.setState({ color: e.target.value });
    // handleFlavorChange = e => this.setState({ flavor: e.target.value });
    // handleCommentsChange = e => this.setState({ comments: e.target.value });

    // handleDelete = () =>  this.setState({ status : 'del'} );

    // handleConfirm = (e) => {
    //   e.preventDefault();
    //   this.props.deleteHandler(this.state.id);
    // };

    render() {
        // let activeButtons = buttons.normal;
        // let leftButtonHandler = this.handleEdit;
        // let rightButtonHandler = this.handleDelete;
        // if (this.state.status === "edit") {
        //   activeButtons = buttons.edit;
        //   leftButtonHandler = this.handleSave;
        //   rightButtonHandler = this.handleCancel;
        // } else if (this.state.status === 'del' ) {
        //   activeButtons = buttons.delete;
        //   leftButtonHandler = this.handleCancel;
        //   rightButtonHandler = this.handleConfirm;
        // }
        return (
            <div>
                
            <Link to="/help">Review Help</Link>

            <form  className="form bg-dark text-light">
                    <h3>Add a New Beer Review</h3>
                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                placeholder="Aroma (1-10)">
                            </input>
                        </div>
                        <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Color (1-10)"></input>
                        </div>
                        <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Mouthfeel (1-10)"></input>
                        </div>
                        <div className="form-group">
                            <input type="text"
                            className="form-control"
                            placeholder="Flavor (1-10)"></input>
                        </div>
                        <div className="form-group">
                        <textarea class="form-control" rows="5" placeholder="Comments"></textarea>
                        </div>
                        {/* <div
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
            </div> */}
            </form>
            <div>
                <Route path="/help" component= {Help} />
            </div>
            
            </div>
        
        );
    }
};
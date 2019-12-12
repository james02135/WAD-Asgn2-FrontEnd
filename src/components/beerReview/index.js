import React, {Component, Fragment} from "react";
import "./beerReview.css";
import Help from "./helpPage";
import { Route, Link } from "react-router-dom";
import axios from 'axios';
import reviewButtons from "../../config/reviewButtons";


export default class BeerReview extends Component {
    state = {
        status: "",
        beerName: this.props.beerName,
        date: this.props.date,
        comments: this.props.comments,
        previousDetails: {
          beerName: this.props.beerName,
          date: this.props.date,
          comments: this.props.comments,
        }
    };

    handleEdit = () => this.setState({ status: "edit" });

    handleSave = async e => {
          e.preventDefault();
          let updatedBeerName = this.state.beerName;
          let updatedDate = this.state.date;
          let updatedComments = this.state.comments;
          if (!updatedBeerName || !updatedDate || !updatedComments) {
          return;
          }
          let { beerName, date, comments } = this.state;
          this.setState({ status: "", previousDetails: { beerName, date, comments } });
          await axios.post('http://localhost:8080/addReview', {updatedBeerName, updatedDate, updatedComments});
    };    

    handleCancel = () => {
      let { beerName, date, comments } = this.state.previousDetails;
      this.setState({ status: "", beerName, date, comments });
    };

    handleBeerNameChange = e => this.setState({ beerName: e.target.value });
    handleDateChange = e => this.setState({ date: e.target.value });
    handleCommentsChange = e => this.setState({ comments: e.target.value });

    handleDelete = () =>  this.setState({ status : 'del'} );

    handleConfirm = async (e) => {
      e.preventDefault();
      await axios.delete(`http://localhost:8080/deleteReview/${this.state.review}`).then(res=> {
        console.log(res);
        console.log(res.data)
      })
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
                                value={this.state.beerName}
                                onChange={this.handleBeerNameChange}
                                placeholder="Brewer and Beer Name">
                            </input>
                        </div>
                        <div className="form-group">
                        <input type="text"
                            className="form-control"
                            value={this.state.date}
                            onChange={this.handleDateChange}
                            placeholder="Date of Review(DDMonYYYY)"></input>
                        </div>
                        <div className="form-group">
                        <textarea class="form-control" rows="5"
                            value={this.state.comments}
                            onChange={this.handleCommentsChange} 
                            placeholder="Comments"></textarea>
                        </div>
                </Fragment>
               
                    <Fragment>
                    <p>
                      <span> {this.props.beerName}</span>
                    </p>
                    <p>
                      <span> {this.props.date} </span>
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
              <Fragment>
                <div>
                    <Route path="/help" component= {Help} />
                </div>
                </Fragment>
            </div>
        
        );
    }
};
import React,  {Fragment} from "react";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";



const HelpPage = props =>{
        return (
            <Fragment>
                <div className="row">
                    <div className="col-2"> 
                        <Link to="/">
                        <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="3x" />
                        <span>Back</span>
                        </Link>
                    </div>
                    <div>
                            <h1>Beer Review Help Page</h1>
                    </div>
                </div>
                <div>
                    <h4>Aroma(1-10): How the beer smells
                        <p> 
                            Any off notes?
                            Unpleasant smells?
                            Is the beer aroma very light or strong?
                            In most beers, there should not be any skunky smells, or green apple notes 
                        </p>
                    </h4>
                    <h4>Color(1-10): How the beer looks
                        <p>
                            Is the beer clear? Hazy?
                            What is the actual color?
                                - Gold, Amber, Black?
                            Should this beer look this way?
                        </p>
                    </h4>
                    <h4>Mouthfeel(1-10): How the beer feels
                        <p>
                            Does it feel thin and watery?
                            Does it feel rounded and full? 
                            Does anything stick to the tongue? 
                            Does it strip the tastebuds? 
                        </p>
                    </h4>
                    <h4>Flavor(1-10): How the beer tastes
                        <p>
                            Any off-putting flavours? 
                            Bitter? Sweet? Bready? 
                            Hops can sometimes impart a fruity, grassy, floral, or citrus note to the beer
                            Malts usually give the beer a bready, sweet, roasted, or nutty flavor 
                            In most beers there should not be flavors like green apple, or butterscotch 
                        </p>
                    </h4>
                    <h4>Comments: Describe the beer a bit
                        <p>
                            Brewer, beer name, style, ABV, etc.
                            Bottle/Can or draft? 
                            Here's where you can write a bit about each of the topics above to elaborate on the number you entered. 
                        </p>
                    </h4>
                </div>
            </Fragment>
        );
};
export default withRouter(HelpPage)

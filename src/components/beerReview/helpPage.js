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
                    <h2>Topics</h2>
                </div>
                <div>
                    <h4>Aroma: How the beer smells </h4>
                        <p> 
                            Any off notes?
                            Unpleasant smells?
                            Is the beer aroma very light or strong?
                            In most beers, there should not be any skunky smells, or green apple notes 
                        </p>
                </div>
                <div>   
                    <h4>Color: How the beer looks</h4>
                        <p>
                            Is the beer clear? Hazy?
                            What is the actual color?
                                - Gold, Amber, Black?
                            Should this beer look this way?
                        </p>
                </div>
                <div>    
                    <h4>Mouthfeel: How the beer feels</h4>
                        <p>
                            Does it feel thin and watery?
                            Does it feel rounded and full? 
                            Does anything stick to the tongue? 
                            Does it strip the tastebuds? 
                        </p>
                </div> 
                <div>   
                    <h4>Flavor: How the beer tastes</h4>
                        <p>
                            Any off-putting flavours? 
                            Bitter? Sweet? Bready? 
                            Hops can sometimes impart a fruity, grassy, floral, or citrus note to the beer
                            Malts usually give the beer a bready, sweet, roasted, or nutty flavor 
                            In most beers there should not be flavors like green apple, or butterscotch 
                        </p>
                </div>
                <div>
                 <h2>Sample Review</h2>
                 <h4>Beer Reviewed: Joe Bloggs Pale Ale</h4>
                 <h6>Date: 04Dec2018</h6>
                 <p>
                     "330ml bottle poured into a pint glass. Medium off-white head that dissipates quickly but doesn't clear completely
                     Initial aroma is of grassy and pine hops, some caramel or biscuit malts round it out. Color is light amber, almost crystal
                     clear, slight bit of haze. Flavor is punchy piney hops, a bit of citrus zest, slight bit of grassy note here, malt backbone
                     is sweet enough to offset the hops, but not enough to be cloying. A bit of a watery mouthfeel, nice long bitter finish."
                    </p>
                 </div>
            </Fragment>     
        );
};
export default withRouter(HelpPage)

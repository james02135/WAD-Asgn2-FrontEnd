import _ from "lodash";


class StubAPI {
    constructor() {
        this.beerReview = [
            {
                id: 1,
                "aroma": "",
                "mouthfeel": "",
                "color": "",
                "flavour": "",
                "comments": ""
            }
        ]
        this.beers = [
                    {
                        id: 1,
                        "category": "Ale",
                        "picture": {thumbnail: '/pictures/PaleAle.jpg'},
                        "name": "Pale Ale",
                        "abv": "ABV: 4.5",
                        "color": "Color: light gold to yellow",
                        "description": "While pale ale beer has definitively English roots, many credit the American take on the style to the advent of Sierra Nevada Pale Ale, which employs the use of American Cascade hops and a clean fermenting ale yeast that has become synonymous with today’s West Coast style craft beers. Currently, pale ales offer beer fans a balance between malt and hops, which make pale ales one of the most enjoyed and approachable beer styles available.",
                        "examples": "Sierra Nevada Pale Ale, Samuel Smiths Pale Ale, Timothy Taylor Landlord"
                    },
                    {
                        id: 2,
                        "category": "Ale",
                        "name": "IPA",
                        "picture": {thumbnail: '/pictures/IPA.jpg'},
                        "abv": "ABV: 6",
                        "color": "Color: light yellow to amber",
                        "description": "India Pale Ale, the modern version of which has largely been formed in the US, has an intense hop flavor, a golden to copper color, and a medium malty body. The aroma is moderate to very strong. IPAs work especially well at cutting the heat of chili, vindaloo or Sichuan cuisine. In England, IPA is often just another name for bitter although some micros are doing their own versions of an American IPA as well",
                        "examples": "Alesmith IPA, Stone IPA, Kernel IPA"
                    },
                    {
                        id: 3,
                        "category": "Ale",
                        "name": "Double IPA",
                        "picture": {thumbnail: '/pictures/DIPA.jpg'},
                        "abv": "ABV: 8",
                        "color": "Color: yellow to deep amber",
                        "description": "Imperial IPA, also called Double or Triple IPA, is a strong often sweet intensely hoppy version of the traditional India Pale Ale. The ABV level for this style generally begins at 7.5% but is more commonly in the 8.0%+ range. The flavour profile is intense all around. Unlike barley wines, the balance is heavily towards the hops, with crystal and other malts providing support.",
                        "examples": "Russian River Pliny, Stone Ruination, The Alchemist Heady Topper"
                    },
                    {
                        id: 4,
                        "category": "Ale",
                        "name": "Barleywine",
                        "picture": {thumbnail: '/pictures/BarleyWine.jpg'},
                        "abv": "ABV: 10",
                        "color": "Color: amber to deep amber",
                        "description": "A Barley Wine is a strong, top-fermenting ale, with an alcohol content of at least 9% and up to 13% (or more) by volume. Hops may be hardly noticeable at all or very noticeable. Sip them out of a glass that will concentrate the aroma, such as a snifter. Barley wines often pair well with desserts. Includes Wheat Wines.",
                        "examples": "Alesmith Old Numbskull, Lost Abbey The Angel's Share, Samuel Adams Utopias"
                    },
                    {
                        id: 5,
                        "category": "Ale",
                        "name": "ESB",
                        "picture": {thumbnail: '/pictures/ESB.jpg'},
                        "abv": "ABV: 4",
                        "color": "Color: amber to garnet",
                        "description": "In England, many breweries have a number of bitters in their range. The style that has come to be known as Premium or Special Bitter generally includes the stronger examples. These are mostly served in the traditional way from the cask, but some are also found in bottle form where the extra malt allows them to stand up better than the more delicate ordinary Bitter. In the US, the designation ESB is common for this style. In the US, some ESBs are made with American hops and a clean yeast, but the alcohol range is the same, as is the range of bitterness but occasionally creeping higher.",
                        "examples": "Rogue Younger Special Bitter, Alesmith Anvil, Southern Tier Harvest"
                    },
                    {
                        id: 6,
                        "category": "Ale",
                        "name": "Brown Ale",
                        "picture": {thumbnail: '/pictures/Brown.jpg'},
                        "abv": "ABV: 5",
                        "color": "Color: garnet to dark brown",
                        "description": "Color ranges from reddish-brown to dark brown. Beers termed brown ale include sweet low alcohol beers such as Manns Original Brown Ale medium strength amber beers of moderate bitterness such as Newcastle Brown Ale and malty but hoppy beers such as Sierra Nevada Brown Ale.",
                        "examples": "Newcastle Brown Ale, Founders Brown, Smuttynose Brown Dog"
                    },
                    {
                        id: 7,
                        "category": "Ale",
                        "name": "Irish Red Ale",
                        "picture": {thumbnail: '/pictures/Red.jpg'},
                        "abv": "ABV: 4",
                        "color": "Color: light red to deep maroon",
                        "description": "The red ales of Ireland have a gentle maltiness, caramelly, earthy notes, and a generally restrained hop character. They are session ales, so alcohol is generally at 5% abv or less, though you will find the occasion stronger example. The major macrobrewed Irish ales are ascribed to be in this style, but the majority of examples are from New World microbreweries working with Michael Jackson’s description of Irish ale.",
                        "examples": "Smithwicks Red Ale, Rye River Irish Red, Three Floyds Brian Boru"
                    },
                    {
                        id: 8,
                        "category": "Ale",
                        "name": "Wheat (White) Ale",
                        "picture": {thumbnail: '/pictures/Wheat.jpg'},
                        "abv": "ABV: 5",
                        "color": "Color: hazy yellow",
                        "description": "Golden to light amber in color, the body is light to medium. The wheat lends a crispness to the brew, often with some acidity. Some hop flavour may be present, but bitterness is low. Not as estery as German or Belgian-style wheats.",
                        "examples": "Samuel Adams Summer Ale, Bell's Oberon Ale, Anchor Summer Ale"
                    },
                    {
                        id: 9,
                        "category": "Ale",
                        "name": "Saison",
                        "picture": {thumbnail: '/pictures/saison.jpg'},
                        "abv": "ABV: 6",
                        "color": "Color: hazy light yellow",
                        "description": "Fruity esters dominate the aroma. Clarity is good with a large foamy head on top. The addition of several spices and herbs create a complex fruity or citrusy flavor. Light to medium bodied with very high carbonation. Alcohol level is medium to high.",
                        "examples": "Saison Dupont, Ommegang Hennepin, Boulevard Tank 7"
                    },
                    {
                        id: 10,
                        "category": "Ale",
                        "name": "Belgian Ale",
                        "picture": {thumbnail: '/pictures/belgian.jpg'},
                        "abv": "ABV: 7",
                        "color": "Color: light yellow",
                        "description": "Belgian-style ales seldom fit neatly into classic beer styles, but this category represents those ales under approximately 7% abv that do not fit other categories. Colour ranges from golden to deep amber, with the occasional example coming in darker. Body tends to be light to medium, with a wide range of hop and malt levels. Yeast driven fruit esters or spicy phenols and acidity may also be present.",
                        "examples": "Leffe Blonde, Affligem Blonde, Poperings Hommelbier"
                    },
                    {
                        id: 11,
                        "category": "Ale",
                        "name": "Dubbel",
                        "picture": {thumbnail: '/pictures/dubbel.jpg'},
                        "abv": "ABV: 8",
                        "color": "Color: garnet to deep brown",
                        "description": "These are dark, malty, yeasty strong ales in the Trappist tradition, but produced (mainly) by secular brewers. Dubbels range between 6.5-8% abv, and have a dark brown, cloudy colour, and a palate mixing malt, a lush fruitiness, and yeast. They are typically bottle-conditioned.",
                        "examples": "Chimay Red, Westmalle Dubbel, La Trappe Dubbel"
                    },
                    {
                        id: 12,
                        "category": "Ale",
                        "name": "Tripel",
                        "picture": {thumbnail: '/pictures/tripel.jpg'},
                        "abv": "ABV: 9",
                        "color": "Color: light yellow to amber",
                        "description": "Like other abbey-style ales, Tripels are strong, yeasty-malty beers. But they are also pale, and have a notable hop profile. Hop bitterness may be higher than a typical abbey ale, up to 45IBUs. But the finish is where the hops really shine, as tripels should finish fairly dry. Otherwise, maltiness is still essential to the style, and the assertive yeast note typical of all abbey ales will be more apparent in tripels, since they do not have the rich dark malts to distract the palate. Alcohol flavours feature more prominently in Tripels that in just about any other style.",
                        "examples": "Chimay Tripel, Tripel Karmeliet, St. Bernardus Tripel"
                    },
                    {
                        id: 13,
                        "category": "Ale",
                        "name": "Quad/Apt",
                        "picture": {thumbnail: '/pictures/quad.jpg'},
                        "abv": "ABV: 10",
                        "color": "Color: light brown to deep brown",
                        "description": "Abt, or quadrupel, is the name given to ultra-strong Trappist and abbey ales. The name Abt was pioneered to describe Westvleteren and the beer that would become St. Bernardus. Quadrupel was pioneered by La Trappe. Abts are the darker of the two, with more rich, deep fruity notes. Quads are paler, with corresponding peachy notes. Neither have much in the way of hop, and both are very strong and malty. Though both are bottle-conditioned, abts trend more towards yeast driven spice. Alcohol is very high ྪ+% abv) for both.",
                        "examples": "Westvleteren 12, Rochefort 10, Unibroue Trois Pistoles"
                    },
                    {
                        id: 14,
                        "category": "Ale",
                        "name": "Porter",
                        "picture": {thumbnail: '/pictures/porter.jpg'},
                        "abv": "ABV: 5",
                        "color": "Color: deep maroon to deep brown",
                        "description": "Black or chocolate malt gives the porter its dark brown color. Porters are often well hopped and somewhat heavily malted. This is a medium-bodied beer and may show some sweetness usually from the light caramel to light molasses range. Hoppiness can range from bitter to mild. Porters, in relation to stouts of the same region, are typically more mild and less aggressively hopped.",
                        "examples": "Bell's Porter, Founders Porter, Sierra Nevada Porter"
                    },
                    {
                        id: 15,
                        "category": "Ale",
                        "name": "Stout",
                        "picture": {thumbnail: '/pictures/Stout.jpg'},
                        "abv": "ABV: 5",
                        "color": "Color: deep brown to black",
                        "description": "A stout is made with dark roasted malts which results in a dark color and a roasted malt flavor. In mainland Europe they are usually termed noir, or black. The word stout means strong and was applied to strong Porter in the 18th century - most typically by Guinness - who were one of the few breweries to continue making such beers into the 20th century. Guinness is today the template for Irish or Dry Stout. Other stout variations are Imperial Stout, Foreign Stout, Sweet, or Milk Stout - as well as Porter, Imperial Porter, and Baltic Porter - and the related Mild and Schwarzbier.",
                        "examples": "Bell's Kalamazoo, Guinness Original, O'Hara's Leann Follain"
                    },
                    {
                        id: 16,
                        "category": "Ale",
                        "name": "Imperial Stout",
                        "picture": {thumbnail: '/pictures/ImpStout.jpg'},
                        "abv": "ABV: 8",
                        "color": "Color: deep brown to black",
                        "description": "An Imperial Stout, or more usually labelled as Russian Imperial Stout derives it's name from beers made in England for the royal court in Russia in the 19th Century. Highlighting the rich notes of black chocolate, deep espresso, and dark fruits, this is an ale normally at an ABV of over 10%.",
                        "examples": "North Coast Old Rasputin, Samuel Smith Imperial Stout, Oskar Blues Ten Fidy"
                    },
                    {
                        id: 17,
                        "category": "Ale",
                        "name": "Barrel-Aged Imperial Stout",
                        "picture": {thumbnail: '/pictures/ImpStout.jpg'},
                        "abv": "ABV: 10",
                        "color": "Color: black",
                        "description": "An Imperial Stout aged in barrels, popularly old Bourbon barrels, but Scotch, Rum, and Sherry casks are also used. The barrel-aging gives the already rich beer a rounded and sometimes buttery note.",
                        "examples": "Goose Island Bourbon County, Founders CBS, Great Divide Yeti"
                    },
                    {
                        id: 18,
                        "category": "Lager",
                        "name": "Pale Lager",
                        "picture": {thumbnail: '/pictures/paleLager.jpg'},
                        "abv": "ABV: 4",
                        "color": "Color: light yellow",
                        "description": "A beer that straddles between the mainstream Pale Lager and Pilsner. Not all beers that call themselves Premium Lager are, but those that are will typically have a deep gold to light bronze colour, and distinct influence of malt and hops. They should be free of adjuncts and will have a softer carbonation than Pale Lager or Classic German Pilsner. IBUs will typically range in the 20’s, and lagering times will typically be 4-6 weeks, more in line with what pilsners have. Overall accent will be malty-to-balanced, alcohol in a slightly tighter range than either Pale Lager or Pilsner Ɣ.5-5.5%). Most often the product of a microbrewery or brewpub, but macrobreweries can make this style if they jack up the hops a bit and make it all-malt.",
                        "examples": "Heineken, Budweiser, Carlsberg"
                    },
                    {
                        id: 19,
                        "category": "Lager",
                        "name": "Amber Lager",
                        "picture": {thumbnail: '/pictures/amberLager.jpg'},
                        "abv": "ABV: 5",
                        "color": "Color: amber",
                        "description": "Your typical macrobrewed Dark Lager, often rendered dark with either brewer's caramel or black patent malt, but each brewery will have a different approach. Aside from caramelly notes, these beers will not typically resemble other dark lager styles so much as they do the lighter styles, due to low amounts of hops, malt and body. Vienna as a beer style was theorized by Michael Jackson, but his oft-cited example was Negra Modelo, which is a macro dark lager like all the others. Some beers have taken on the idea of a Vienna lager as a distinct style, loosely based on the 1840 Anton Dreher beer, and these can be expected to be all-malt, with a fuller body and more character than the average macro dark.",
                        "examples": "Samuel Adams Boston Lager, Brooklyn Lager, Great Lakes Elliot Ness"
                    },
                    {
                        id: 20,
                        "category": "Lager",
                        "name": "Black Lager",
                        "picture": {thumbnail: '/pictures/blackLager.jpg'},
                        "abv": "ABV: 5",
                        "color": "Color: deep brown to black",
                        "description": "Dark brown to black. Medium body. Roasted malt evident. Low sweetness in aroma and flavor. Low to medium bitterness. Low bitterness from roast malt. No hop flavor or aroma. No fruitiness, esters.",
                        "examples": "Uinta Baba, Kostrizer Schwarzbier, Saranac Black Forest"
                    },
                    {
                        id: 21,
                        "category": "Lager",
                        "name": "Steam Beer",
                        "picture": {thumbnail: '/pictures/Blonde.jpeg'},
                        "abv": "ABV: 4.5",
                        "color": "Color: yellow to amber",
                        "description": "Style originating in 18th century California, where brewers without access to refrigeration produced beers using lager yeasts and warm temperatures. These still retain some of the rounded character inherent in all lagers, but with a dose of ale fruitiness.",
                        "examples": "Anchor Steam, Sweetwater Road Trip, Amager Summer Fusion"
                    },
                    {
                        id: 22,
                        "category": "Lager",
                        "name": "Pilsener",
                        "picture": {thumbnail: '/pictures/pilsener.jpg'},
                        "abv": "ABV: 4",
                        "color": "Color: very light yellow",
                        "description": "While the definition of Pilsener is open to debate in the beer community, it generally refers to pale, hoppy lagers ranging from 30 IBU and up. From Classic German Pilsners, which tend to be light-to-medium bodied, semi-sweet to off-dry, hopped with German noble hops, to New World artisan renditions in North America, New Zealand, and elsewhere, which showcase modern hop varieties. A separate style category is maintained for Czech Pilsner / Svetly.",
                        "examples": "Victory Prima Pils, Bitburger, Veltins"
                    },
                    {
                        id: 23,
                        "category": "Lager",
                        "name": "Kolsch",
                        "picture": {thumbnail: '/pictures/kolsch.jpg'},
                        "abv": "ABV: 4",
                        "color": "Color: light yellow",
                        "description": "Golden, top-fermented style native to Köln, Germany. The style has a very narrow profile and many beers that consider themselves to be Kölsch-beers are not. Generally they have a moderate bitterness, but fairly prominent hop flavour (typically Spalt, Tettnang, or Hallertau). They have high effervescence, medium esters, but a rounded, stylish character derived from lagering. Many Kölsch-beers are brewed using additional wheat-malt to create a smoother sweeter taste",
                        "examples": "Reissdorf Kolsch, Gaffel Kolsch, Fruh Kolsch"
                    },
                    {
                        id: 24,
                        "category": "Lager",
                        "name": "Helles",
                        "picture": {thumbnail: '/pictures/helles.jpg'},
                        "abv": "ABV: 4.5",
                        "color": "Color: hazy yellow",
                        "description": "Meaning pale, a traditional German pale lager produced primarily in Bavaria. These two styles are closely related, the former hailing from Dortmund and the latter from Bavaria. Both are slightly strong ƕ.0-5.6% ABV), malt-accented pale lagers. The cookie-like or bready maltiness should be very much in evidence in a traditional example. These beers are clean and easy to drink in quantity. Some Dortmunders made in Denmark and the Netherlands are stronger.",
                        "examples": "Spaten Munchner Hell, Lowenbrau Original, Great Lakes Dortmunder Gold"
                    },
                    {
                        id: 25,
                        "category": "Lager",
                        "name": "Bock",
                        "picture": {thumbnail: '/pictures/bock.jpg'},
                        "abv": "ABV: 7",
                        "color": "Color: light red to deep maroon",
                        "description": "The Heller Bock is primarily a malty beer from the German brewing tradition with little hop character - neither bitter nor aromatic - though the style typically has a little more hops than the standard Bock. The color is golden to light brown or amber. They should normally pour with a substantial white head. Typical examples are pale and clear and normally brewed with Lager-yeast.",
                        "examples": "Rogue Dead Guy, Abita Bock, Einbeck Mai-Ur-Bock"
                    },
                    {
                        id: 26,
                        "category": "Ale",
                        "name": "Hefeweizen",
                        "picture": {thumbnail: '/pictures/hefe.jpeg'},
                        "abv": "ABV: 5",
                        "color": "Color: hazy yellow to amber",
                        "description": "Depending on the style can range from pale and light body to dark brown with full body. Wheat beer is characterized by its cloudy appearance and its banana and sometimes vanilla aftertaste.",
                        "examples": "Franziskaner Hefeweissbier, Paulaner Hefe-Weiss, Ayinger Brau-Weiss"
                    } 
        ];
    }

    addBeer(category, name, abv, color, description, examples) {
        let id = 1;
        let last = _.last(this.beers);
        if (last) {
        id = last.id + 1;
        }
        let len = this.beers.length;
        let newLen = this.beers.push({
        id,
        category,
        name,
        abv,
        color,
        description,
        examples
        });
        return newLen > len;
    }

    findBeer(id) {
        let index = _.findIndex(
        this.beers,
        beers => `${beers.name}` === id
        );
        if (index !== -1) {
        return this.beers[index];
        }
        return null;
    }

    findBeerReview(id) {
        let index = _.findIndex(
            this.beerReview,
            beerReview => `${beerReview}` === id
        );
        if (index !== -1) {
            return this.beerReview[index];
        }
        return null;
    }

    delete(k) {
        let elements = _.remove(this.beers, beers => beers.name === k);
        return elements;
    }

    initialize(beers, beerReview) {
        this.beers = beers;
        this.beerReview = beerReview;
    }

    getAll() {
        return this.beers;
    }

    getBeer(id) {
        let index = _.findIndex(this.beers, beers => beers.id === id);
        let result = index !== -1 ? this.beers[index] : null;
        return result;
    }

    getBeerReview(id) {
        let index = _.findIndex(this.beerReview, beerReview => beerReview.id === id);
        let result = index !== -1 ? this.beerReview[index] : null;
        return result;
    }

    updateBeer(key, abv, color) {
        let index = _.findIndex(this.beers, beers => beers.name === key);
        if (index !== -1) {
        this.beers[index].abv = abv;
        this.beers[index].color = color;
        return true;
        }
        return false;
    }

    updateBeerReview(key, aroma, mouthfeel, color, flavor, comments) {
        let index = _.findIndex(this.beerReview, beerReview => beerReview.id === key);
        if (index !== -1) {
        this.beerReview[index].aroma = aroma;
        this.beerReview[index].mouthfeel = mouthfeel;
        this.beerReview[index].color = color;
        this.beerReview[index].flavor = flavor;
        this.beerReview[index].comments = comments;
        return true;
        }
        return false;
    }
}

export default new StubAPI();
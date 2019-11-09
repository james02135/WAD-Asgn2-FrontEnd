import _ from "lodash";
//import IPA from "../pictures/IPA.jpg"

class StubAPI {
    constructor() {
        this.beers = [
                            {
                                id: 1,
                                "name": "Pale Ale",
                                "abv": "ABV: 4.5%",
                                "color": "Color: light gold to yellow"
                            },
                            {
                                id: 2,
                                "name": "IPA",
                                "abv": "ABV: 6",
                                "color": "Color: light yellow to amber"
                            },
                            {
                                id: 3,
                                "name": "Double IPA",
                                "abv": "ABV: 8",
                                "color": "Color: yellow to deep amber"
                            },
                            {
                                id: 4,
                                "name": "Barleywine",
                                "abv": "ABV: 10",
                                "color": "Color: amber to deep amber"
                            },
                            {
                                id: 5,
                                "name": "ESB",
                                "abv": "ABV: 4",
                                "color": "Color: amber to garnet"
                            },
                            {
                                id: 6,
                                "name": "Brown Ale",
                                "abv": "ABV: 5",
                                "color": "Color: garnet to dark brown"
                            },
                            {
                                id: 7,
                                "name": "Red Ale",
                                "abv": "ABV: 4",
                                "color": "Color: light red to deep maroon"
                            },
                            {
                                id: 8,
                                "name": "Wheat (White) Ale",
                                "abv": "ABV: 5",
                                "color": "Color: hazy yellow"
                            },
                            {
                                id: 9,
                                "name": "Saison",
                                "abv": "ABV: 6",
                                "color": "Color: hazy light yellow"
                            },
                            {
                                id: 10,
                                "name": "Golden Ale",
                                "abv": "ABV: 7",
                                "color": "Color: light yellow"
                            },
                            {
                                id: 11,
                                "name": "Dubbel",
                                "abv": "ABV: 8",
                                "color": "Color: garnet to deep brown"
                            },
                            {
                                id: 12,
                                "name": "Tripel",
                                "abv": "ABV: 9",
                                "color": "Color: light yellow to amber"
                            },
                            {
                                id: 13,
                                "name": "Quad/Apt",
                                "abv": "ABV: 10",
                                "color": "Color: light brown to deep brown"
                            },
                            {
                                id: 14,
                                "name": "Porter",
                                "abv": "ABV: 5",
                                "color": "Color: deep maroon to deep brown"
                            },
                            {
                                id: 15,
                                "name": "Stout",
                                "abv": "ABV: 5",
                                "color": "Color: deep brown to black"
                            },
                            {
                                id: 16,
                                "name": "Imperial Stout",
                                "abv": "ABV: 8",
                                "color": "Color: deep brown to black"
                            },
                            {
                                id: 17,
                                "name": "Barrel-Aged Imperial Stout",
                                "abv": "ABV: 10",
                                "color": "Color: black"
                            },
                            {
                                id: 18,
                                "name": "Pale Lager",
                                "abv": "ABV: 4",
                                "color": "Color: light yellow"
                            },
                            {
                                id: 19,
                                "name": "Amber Lager",
                                "abv": "ABV: 5",
                                "color": "Color: amber"
                            },
                            {
                                id: 20,
                                "name": "Black Lager",
                                "abv": "ABV: 5",
                                "color": "Color: deep brown to black"
                            },
                            {
                                id: 21,
                                "name": "Steam Beer",
                                "abv": "ABV: 4.5",
                                "color": "Color: yellow to amber"
                            },
                            {
                                id: 22,
                                "name": "Pilsener",
                                "abv": "ABV: 4",
                                "color": "Color: very light yellow"
                            },
                            {
                                id: 23,
                                "name": "Kolsch",
                                "abv": "ABV: 4",
                                "color": "Color: light yellow"
                            },
                            {
                                id: 24,
                                "name": "Helles",
                                "abv": "ABV: 4.5",
                                "color": "Color: hazy yellow"
                            },
                            {
                                id: 25,
                                "name": "Bock",
                                "abv": "ABV: 7",
                                "color": "Color: light red to deep maroon"
                            },
                            {
                                id: 26,
                                "name": "Hefeweizen",
                                "abv": "ABV: 5",
                                "color": "Color: hazy yellow to amber"
                            }
                        
                    
                
            
        ];
    }

    add(name, abv, color) {
        let id = 1;
        let last = _.last(this.beers);
        if (last) {
        id = last.id + 1;
        }
        let len = this.beers.length;
        let newLen = this.beers.push({
        id,
        name,
        abv,
        color,
        });
        return newLen > len;
    }

    delete(k) {
        let elements = _.remove(this.beers, beers => beers.name === k);
        return elements;
    }

    initialize(beers) {
        this.beers = beers;
    }

    getAll() {
        return this.beers;
    }

    getBeer(id) {
        let index = _.findIndex(this.beers, beers => beers.id === id);
        let result = index !== -1 ? this.beers[index] : null;
        return result;
    }

    update(key, name) {
        let index = _.findIndex(this.beers, beers => beers.name === key);
        if (index !== -1) {
        this.beers[index].name = name;
        return true;
        }
        return false;
    }
}

export default new StubAPI();
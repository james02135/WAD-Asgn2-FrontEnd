import _ from "lodash";
//import IPA from "../pictures/IPA.jpg"

class StubAPI {
    constructor() {
        this.beers = [
                            {
                                id: 1,
                                "category": "Ale",
                                "picture": {thumbnail: '/pictures/PaleAle.jpg'},
                                "name": "Pale Ale",
                                "abv": "ABV: 4.5%",
                                "color": "Color: light gold to yellow"
                            },
                            {
                                id: 2,
                                "category": "Ale",
                                "name": "IPA",
                                "picture": {thumbnail: '/pictures/IPA.jpg'},
                                "abv": "ABV: 6",
                                "color": "Color: light yellow to amber"
                            },
                            {
                                id: 3,
                                "category": "Ale",
                                "name": "Double IPA",
                                "picture": {thumbnail: '/pictures/DIPA.jpg'},
                                "abv": "ABV: 8",
                                "color": "Color: yellow to deep amber"
                            },
                            {
                                id: 4,
                                "category": "Ale",
                                "name": "Barleywine",
                                "picture": {thumbnail: '/pictures/BarleyWine.jpg'},
                                "abv": "ABV: 10",
                                "color": "Color: amber to deep amber"
                            },
                            {
                                id: 5,
                                "category": "Ale",
                                "name": "ESB",
                                "picture": {thumbnail: '/pictures/ESB.jpg'},
                                "abv": "ABV: 4",
                                "color": "Color: amber to garnet"
                            },
                            {
                                id: 6,
                                "category": "Ale",
                                "name": "Brown Ale",
                                "picture": {thumbnail: '/pictures/Brown.jpg'},
                                "abv": "ABV: 5",
                                "color": "Color: garnet to dark brown"
                            },
                            {
                                id: 7,
                                "category": "Ale",
                                "name": "Red Ale",
                                "picture": {thumbnail: '/pictures/Red.jpg'},
                                "abv": "ABV: 4",
                                "color": "Color: light red to deep maroon"
                            },
                            {
                                id: 8,
                                "category": "Ale",
                                "name": "Wheat (White) Ale",
                                "picture": {thumbnail: '/pictures/Wheat.jpg'},
                                "abv": "ABV: 5",
                                "color": "Color: hazy yellow"
                            },
                            {
                                id: 9,
                                "category": "Ale",
                                "name": "Saison",
                                "picture": {thumbnail: '/pictures/saison.jpg'},
                                "abv": "ABV: 6",
                                "color": "Color: hazy light yellow"
                            },
                            {
                                id: 10,
                                "category": "Ale",
                                "name": "Golden Ale",
                                "picture": {thumbnail: '/pictures/belgian.jpg'},
                                "abv": "ABV: 7",
                                "color": "Color: light yellow"
                            },
                            {
                                id: 11,
                                "category": "Ale",
                                "name": "Dubbel",
                                "picture": {thumbnail: '/pictures/dubbel.jpg'},
                                "abv": "ABV: 8",
                                "color": "Color: garnet to deep brown"
                            },
                            {
                                id: 12,
                                "category": "Ale",
                                "name": "Tripel",
                                "picture": {thumbnail: '/pictures/tripel.jpg'},
                                "abv": "ABV: 9",
                                "color": "Color: light yellow to amber"
                            },
                            {
                                id: 13,
                                "category": "Ale",
                                "name": "Quad/Apt",
                                "picture": {thumbnail: '/pictures/quad.jpg'},
                                "abv": "ABV: 10",
                                "color": "Color: light brown to deep brown"
                            },
                            {
                                id: 14,
                                "category": "Ale",
                                "name": "Porter",
                                "picture": {thumbnail: '/pictures/porter.jpg'},
                                "abv": "ABV: 5",
                                "color": "Color: deep maroon to deep brown"
                            },
                            {
                                id: 15,
                                "category": "Ale",
                                "name": "Stout",
                                "picture": {thumbnail: '/pictures/Stout.jpg'},
                                "abv": "ABV: 5",
                                "color": "Color: deep brown to black"
                            },
                            {
                                id: 16,
                                "category": "Ale",
                                "name": "Imperial Stout",
                                "picture": {thumbnail: '/pictures/ImpStout.jpg'},
                                "abv": "ABV: 8",
                                "color": "Color: deep brown to black"
                            },
                            {
                                id: 17,
                                "category": "Ale",
                                "name": "Barrel-Aged Imperial Stout",
                                "picture": {thumbnail: '/pictures/ImpStout.jpg'},
                                "abv": "ABV: 10",
                                "color": "Color: black"
                            },
                            {
                                id: 18,
                                "category": "Lager",
                                "name": "Pale Lager",
                                "picture": {thumbnail: '/pictures/paleLager.jpg'},
                                "abv": "ABV: 4",
                                "color": "Color: light yellow"
                            },
                            {
                                id: 19,
                                "category": "Lager",
                                "name": "Amber Lager",
                                "picture": {thumbnail: '/pictures/amberLager.jpg'},
                                "abv": "ABV: 5",
                                "color": "Color: amber"
                            },
                            {
                                id: 20,
                                "category": "Lager",
                                "name": "Black Lager",
                                "picture": {thumbnail: '/pictures/blackLager.jpg'},
                                "abv": "ABV: 5",
                                "color": "Color: deep brown to black"
                            },
                            {
                                id: 21,
                                "category": "Lager",
                                "name": "Steam Beer",
                                "picture": {thumbnail: '/pictures/Blonde.jpeg'},
                                "abv": "ABV: 4.5",
                                "color": "Color: yellow to amber"
                            },
                            {
                                id: 22,
                                "category": "Lager",
                                "name": "Pilsener",
                                "picture": {thumbnail: '/pictures/pilsener.jpg'},
                                "abv": "ABV: 4",
                                "color": "Color: very light yellow"
                            },
                            {
                                id: 23,
                                "category": "Lager",
                                "name": "Kolsch",
                                "picture": {thumbnail: '/pictures/kolsch.jpg'},
                                "abv": "ABV: 4",
                                "color": "Color: light yellow"
                            },
                            {
                                id: 24,
                                "category": "Lager",
                                "name": "Helles",
                                "picture": {thumbnail: '/pictures/helles.jpg'},
                                "abv": "ABV: 4.5",
                                "color": "Color: hazy yellow"
                            },
                            {
                                id: 25,
                                "category": "Lager",
                                "name": "Bock",
                                "picture": {thumbnail: '/pictures/bock.jpg'},
                                "abv": "ABV: 7",
                                "color": "Color: light red to deep maroon"
                            },
                            {
                                id: 26,
                                "category": "Ale",
                                "name": "Hefeweizen",
                                "picture": {thumbnail: '/pictures/hefe.jpg'},
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

    update(id, name) {
        let index = _.findIndex(this.beers, beers => beers.name === id);
        if (index !== -1) {
        this.beers[index].name = name;
        return true;
        }
        return false;
    }
}

export default new StubAPI();
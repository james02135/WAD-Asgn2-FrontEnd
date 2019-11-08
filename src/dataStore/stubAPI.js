import _ from "lodash";

class StubAPI {
    constructor() {
        this.beers = [{
                "Ale": [ {
                        "Pale Ale": [
                            {
                                id: 1,
                                "name": "Pale Ale",
                                "abv": 4.5,
                                "color": "light gold to yellow"
                            },
                            {
                                id: 2,
                                "name": "IPA",
                                "abv": 6,
                                "color": "light yellow to amber"
                            },
                            {
                                id: 3,
                                "name": "Double IPA",
                                "abv": 8,
                                "color": "yellow to deep amber"
                            },
                            {
                                id: 4,
                                "name": "Barleywine",
                                "abv": 10,
                                "color": "amber to deep amber"
                            }
                        ],
                        "English Ale": [
                            {
                                id: 5,
                                "name": "ESB",
                                "abv": 4,
                                "color": "amber to garnet"
                            },
                            {
                                id: 6,
                                "name": "Brown Ale",
                                "abv": 5,
                                "color": "garnet to dark brown"
                            },
                            {
                                id: 7,
                                "name": "Red Ale",
                                "abv": 4.5,
                                "color": "light red to deep maroon"
                            }
                        ],
                        "Belgian Ale": [
                            {
                                id: 8,
                                "name": "Wheat (White) Ale",
                                "abv": 4.5,
                                "color": "hazy yellow"
                            },
                            {
                                id: 9,
                                "name": "Saison",
                                "abv": 6,
                                "color": "hazy light yellow"
                            },
                            {
                                id: 10,
                                "name": "Golden Ale",
                                "abv": 7,
                                "color": "light yellow"
                            },
                            {
                                id: 11,
                                "name": "Dubbel",
                                "abv": 8,
                                "color": "garnet to deep brown"
                            },
                            {
                                id: 12,
                                "name": "Tripel",
                                "abv": 9,
                                "color": "light yellow to amber"
                            },
                            {
                                id: 13,
                                "name": "Quad/Apt",
                                "abv": 10,
                                "color": "light brown to deep brown"
                            }
                        ],
                        "Stout": [
                            {
                                id: 14,
                                "name": "Porter",
                                "abv": 5,
                                "color": "deep maroon to deep brown"
                            },
                            {
                                id: 15,
                                "name": "Stout",
                                "abv": 5,
                                "color": "deep brown to black"
                            },
                            {
                                id: 16,
                                "name": "Imperial Stout",
                                "abv": 8,
                                "color": "deep brown to black"
                            },
                            {
                                id: 17,
                                "name": "Barrel-Aged Imperial Stout",
                                "abv": 10,
                                "color": "black"
                            }
                        ]
                }],
                "Lager": [ {
                        "United States": [
                            {
                                id: 18,
                                "name": "Pale Lager",
                                "abv": 4,
                                "color": "light yellow"
                            },
                            {
                                id: 19,
                                "name": "Amber Lager",
                                "abv": 5,
                                "color": "amber"
                            },
                            {
                                id: 20,
                                "name": "Black Lager",
                                "abv": 5,
                                "color": "deep brown to black"
                            },
                            {
                                id: 21,
                                "name": "Steam Beer",
                                "abv": 4.5,
                                "color": "yellow to amber"
                            }
                        ],
                        "Europe": [
                            {
                                id: 22,
                                "name": "Pilsener",
                                "abv": 4,
                                "color": "very light yellow"
                            },
                            {
                                id: 23,
                                "name": "Kolsch",
                                "abv": 4,
                                "color": "light yellow"
                            },
                            {
                                id: 24,
                                "name": "Helles",
                                "abv": 4.5,
                                "color": "hazy yellow"
                            },
                            {
                                id: 25,
                                "name": "Bock",
                                "abv": 7,
                                "color": "light red to deep maroon"
                            },
                            {
                                id: 26,
                                "name": "Hefeweizen",
                                "abv": 5,
                                "color": "hazy yellow to amber"
                            }
                        ]
                    }
                ]
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
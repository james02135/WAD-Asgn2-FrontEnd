import _ from "lodash";

class StubAPI {
    constructor() {
        this.beers = [];
    }

    find(id) {
        let index = _.findIndex(
        this.beers,
        beers => `${beers.name}` === id
        );
        if (index !== -1) {
        return this.beers[index];
        }
        return null;
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
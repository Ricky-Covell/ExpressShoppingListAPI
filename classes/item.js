const items = require("../fakeDb");

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        items.push(this);
    }

    static all(){
        return items;
    }


    static get(name) {
        const found = items.find(i => i.name === name);
        if (found === undefined){
            throw {message: `${name} Not Found`, status: 404 }
        }

        return found;
    }


    static update(name, data) {
        let found = Item.get(name);
        if (found === undefined){
            throw {message: `${name} Not Found`, status: 404 }
        }

        found.name = data.name;
        found.price = data.price;

        return found;
    }


    static delete(name) {
        let foundIndex = items.findIndex(i => i.name === name);
        if (foundIndex === -1) {
            throw {message: `${name} Not Found`, status: 404}
        }
        items.splice(foundIndex, 1);
    }
}

// let apple = new Item('apple', '100');
// items.push(apple);

module.exports = Item;
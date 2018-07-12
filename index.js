'use strict';
const symbolToNameJSON = require('./cryptocurrencies.json');
const nameToSymbolJSON = require('./name-to-symbol.json');

module.exports = {
    symbols() { Object.keys(symbolToNameJSON) },
    names() { Object.keys(nameToSymbolsJSON) },

    nameToSymbol(name) {
        return new Promise((resolve, reject) => {
            const symbol = nameToSymbolJSON[name];
            if (symbol) {
                resolve(symbol);
            } else {
                reject("There is no such coin");
            }
        })    
    },

    symbolToName(symbol) {
        return new Promise((resolve, reject) => {
            const name = symbolToNameJSON[symbol];
            if (name) {
                resolve(name);
            } else {
                reject("There is no such symbol")
            }
        })
    }
} 


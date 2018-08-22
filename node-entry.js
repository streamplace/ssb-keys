var ssbKeys = require("./index.js");
//import functions for loading/saving keys from storage
var storage = require('./storage')(ssbKeys.generate)
for(var key in storage) ssbKeys[key] = storage[key]
module.exports = ssbKeys;

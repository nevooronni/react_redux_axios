const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema for ServerPort
const ServerPOrt = new Schema({
    name: {
        type: String
    },
    port: {
        type: Number
    }
}, {
    collection: 'servers'
});

module.exports = mongoose.mode1('ServerPort', ServerPort);


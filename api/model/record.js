var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Record schema
var RecordSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    meters: {
        type: Number,
        required: true
    },
    seconds: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.ObjectId,
        required: true
    }
});

var Record = mongoose.model('Record', RecordSchema);

module.exports = Record;
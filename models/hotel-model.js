const { Schema, model } = require('mongoose');

const hotelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    stars: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: true,
    },
    rooms: [{
        type: Schema.Types.ObjectId,
        ref: 'Room',
    }]
});

const Hotel = model('Hotel', hotelSchema);

module.exports = { Hotel };

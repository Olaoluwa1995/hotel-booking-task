const { Schema, model } = require('mongoose');

const roomSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String, 
        required:true,
    },
})
const Room = model('Room', roomSchema);

module.exports = { Room }
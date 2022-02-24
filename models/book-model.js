const { Schema, model } = require('mongoose');

const bookSchema = new Schema ({
    hotelId: {
        type: Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true
    },
    roomId: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    adult: {
        type: Number,
        required: true
    },
    children: {
        type: Number,
        required: true,
    },
    checkIn: {
        type: String,
        required: true,
    },
    checkOut: {
        type: String,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
});

const Book = model('Book', bookSchema);

module.exports = { Book };
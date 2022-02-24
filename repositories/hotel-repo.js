const { Hotel, Book, Room } = require("../models")
const hotelSeed = require('./seeds/hotel-seed')
const roomSeed = require('./seeds/room-seed')

module.exports = Object.freeze({
    findHotels: async () => {
        const hotels = await Hotel.find({});
        return hotels;
    },

    findHotelById: async (_id) => {
        const hotel = await Hotel.findById(_id).populate('rooms');
        return hotel;
    },

    findHotelRoom: async (_id, roomId) => {
        const hotel = await Hotel.findOne({ _id });
        return hotel;
    },

    bookHotelRoom: async (data) => {
        const book = await Book.create(data);
        return book;
    },

    seedHotel: async (data) => {
        const hotels = await Hotel.find().count();
        if(hotels > 0) { 
            console.log('Hotels and Rooms Seed already');
            return;
        }
        await Hotel.insertMany(hotelSeed);
        await Room.insertMany(roomSeed);
        console.log('Hotel and Room Seeded')
    }
});
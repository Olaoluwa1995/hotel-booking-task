const HotelRepo = require("../repositories/hotel-repo");
const { successResponseMsg, errorResponseMsg } = require("../utils/response");

module.exports = {
    getHotels: async (req, res) => {
        try {
            const hotels = await HotelRepo.findHotels();
            return successResponseMsg(res, 200, 'Successfully fetched hotels', hotels);
        } catch (err) {
            console.log(err);
            return errorResponseMsg(res, 500, 'Internal Server Error');
        }
    },
    getHotel: async (req, res) => {
        try{
            const { id } = req.params;
            const hotel = await HotelRepo.findHotelById(id);
            if(!hotel) return errorResponseMsg(res, 404, 'Hotel not found');
            return successResponseMsg(res, 200, 'Successfully fetched hotel', hotel);
        } catch (err) {
            console.log(err);
            return errorResponseMsg(res, 500, 'Internal Server Error');
        }
    },
    bookHotel: async (req, res) => {
        try {
            const { body, params } = req;
            const hotelRoom = await HotelRepo.findHotelRoom(params.id, params.roomId);
            if(!hotelRoom) return errorResponseMsg(res, 404, 'Hotel doesnt have the required room');
            const bookDetails = { ...body, roomId: params.roomId, hotelId: hotelRoom._id };
            const book = await HotelRepo.bookHotelRoom(bookDetails);
            return successResponseMsg(res, 201, 'Successfully booked hotel room', book);
        } catch (err) {
            console.log(err);
            return errorResponseMsg(res, 500, 'Internal Server Error');
        }
    }
}
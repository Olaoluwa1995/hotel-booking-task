const Joi = require('joi');

const CreateUserSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    adult: Joi.number().required(),
    children : Joi.number().required(),
    checkIn: Joi.date().required(),
    checkOut: Joi.date().required(),
    totalPrice: Joi.number().required(),
})

module.exports = CreateUserSchema;

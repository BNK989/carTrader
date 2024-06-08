import Joi from 'joi'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const schema = Joi.object({
    make: Joi.string().required(),
    model: Joi.string().required(),
    year: Joi.number()
        .integer()
        .min(1886)
        .max(new Date().getFullYear() + 1),
    miles: Joi.number().integer().min(0).required(),
    city: Joi.string().required(),
    numberOfSeats: Joi.number().integer().min(0).max(100).required(),
    features: Joi.array().items(Joi.string()).required(),
    image: Joi.string().required(),
    listerId: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().min(0).max(1000000),
    name: Joi.string().required(),
}) //.required()

export default defineEventHandler(async (e) => {
    const body = await readBody(e)
    

    const { error, value } = schema.validate(body)

    if (error) {
        throw createError({ statusCode: 412, statusMessage: error.message })
    }

    const car = await prisma.car.create({
        data: {
            make: value.make.toLowerCase(),
            model: value.model.toLowerCase(),
            year: +value.year,
            miles: +value.miles,
            city: value.city.toLowerCase(),
            numberOfSeats: value.numberOfSeats,
            features: value.features,
            description: value.description,
            image: value.image,
            listerId: value.listerId,
            price: +value.price,
            name: value.name.toLowerCase(),
        },
    })

    return car
})

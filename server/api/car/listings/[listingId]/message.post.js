import { PrismaClient } from '@prisma/client'
import Joi from 'joi'

//what the body should have
const schema = Joi.object({
    email: Joi.string().required(),
    phone: Joi.string().required(),
    //.length(10).pattern(/^[0-9]+*$/)
    name: Joi.string().required(),
    message: Joi.string().min(20).required(),
})

const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const listingId = e.context.params.listingId
    const body = await readBody(e)

    //validate via schema on top
    const { error } = schema.validate(body)

    if (error) {
        throw createError({
            statusCode: 412,
            statusMessage: 'Joi: ' + error.message,
        })
    }

    //create message
    //prisma.[table-name].create(object with data property)
    return prisma.message.create({
        data: {
            message: body.message,
            email: body.email,
            name: body.name,
            phone: body.phone,
            listingId: parseInt(listingId),
        },
    })
})

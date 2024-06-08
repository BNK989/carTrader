import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler (async (e) => {
    const id = e.context.params.id
    const car = await prisma.car.findUnique({
        where: {
            id: parseInt(id),
        }
    })


    if (!car) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Car not found',
        })
    }
    
    return car

}) 
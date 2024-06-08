import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const userId = e.context.params.userId
    const cars = await prisma.car.findMany({
        where: {
            listerId: userId
        },
        select: {
            image: true,
            id: true,
            name: true,
            price: true,
        }
    })
    return cars
})
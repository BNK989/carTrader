import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const listingId = e.context.params.listingId
    console.log('listingId', listingId)

    return prisma.car.delete({
        where: {
            id: parseInt(listingId),
        },
    })
})
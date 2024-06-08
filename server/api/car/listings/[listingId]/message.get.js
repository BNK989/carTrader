import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const listingId = e.context.params.listingId
    return prisma.message.findMany({
        where: {
            listingId: parseInt(listingId),
        }
        
    })

})

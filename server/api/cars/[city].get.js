import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler ((e) => {
    const city = e.context.params.city
    const { make, min, max } = getQuery(e)

    const filterObj = {
        city: city.toLowerCase(),
    }

    if(make) {
        filterObj.make = make
    }

    if(min) {
        filterObj.price = {
            gte: +min
        }
    }
    if (max) {
        filterObj.price = {
            ...filterObj.price, lte: +max
        }
    }

    console.log('filterObj', filterObj)


    return prisma.car.findMany({
        where: filterObj,
        // orderBy: {
        //     price: 'asc'
        // }
    })
}) 
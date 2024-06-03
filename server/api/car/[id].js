import cars from '@/data/cars.json'

export default defineEventHandler ((e) => {
    const id = e.context.params.id
    const car = cars.find(car => car.id == id)

    if (!car) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Car not found',
        })
    }
    return car

}) 
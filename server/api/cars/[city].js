import cars from '@/data/cars.json'

export default defineEventHandler ((e) => {
    const city = e.context.params.city
    const { make, min, max } = getQuery(e)

    let filteredCars = cars.filter(car => car.city.toLowerCase() === city.toLowerCase())

    if(make.length > 1) {
        filteredCars =  filteredCars.filter(car => make.includes(car.make.toLowerCase()) )
    }

    if(min) {
        filteredCars = filteredCars.filter(car => car.price >= (+min))
    }
    if (max) {
        filteredCars = filteredCars.filter(car => car.price <= (+max))
    }

    console.log('found ' + filteredCars.length + ' cars')


    return filteredCars
}) 
export default async (city, filters) => {
    // console.log('using FetchCars:')
    // console.log('city:', city)
    // console.log('filters:', filters)
    const { data, error } = await useFetch(`/api/cars/${city}`, {
        params: {
            ...filters,
        },
    })

    // console.log('data:', data)
    // console.log('error:', error)

    // if (error){
    //     console.error('error', error)
    //     throw createError({
    //         ...error,
    //         statusCode: error.statusCode,
    //         statusMessage: error.message })
    // }

    return data
}

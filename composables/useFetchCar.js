export default async (id) => {
    const { data, error } = await useFetch(`/api/car/${id}`)
    // console.log('data:', data)

    return data
}

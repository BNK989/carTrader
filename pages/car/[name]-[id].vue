<template>
    <!-- <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"> -->
        <h1>{{ carId }}</h1>
    <div class="dark:text-gray-50">
        <DetailHero :car="car" />
        <DetailAttributes :features="car.features"/>
        <DetailDescription :description="car.description" />
        <DetailContact />
    </div>
    <!-- </div> -->
</template>

<script setup>
const route = useRoute()
const { capitalize } = useUtilities()
// const {cars} = useCars()

definePageMeta({
    layout: 'other',
})

useHead({
    title: `${capitalize(route.params.name) || 'Car'} Details`,
})

const carId = +route.params.id
const car = await useFetchCar(carId)

// const car = computed(() => cars.find((car) => car.id == carId))

if(!car.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Car not found',
    })
}


</script>

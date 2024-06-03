<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="results flex flex-col gap-4">
            <!-- <pre>{{ cars }}</pre> -->
            <!-- <Cards /> -->
            <Cards :cars="cars" />
        </div>
    </section>
</template>


<script setup>
const route = useRoute()

// const getCars = async () => {
//     cars = await useFetchCars(route.params.city, {
//     make: route.params.make.split('-OR-'),
//     min: route.query.min,
//     max: route.query.max
//     })
// }
const cars = await useFetchCars(route.params.city, {
    make: route.params.make.split('-OR-'),
    min: route.query.min,
    max: route.query.max
    })

watch(() => route.query,
     () => { console.log('ref')}, { immediate: true }
)

</script>
<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="results flex flex-col gap-4">
            <Cards :cars="cars" v-if="cars.length > 0" />
            <div v-else>No results</div>
        </div>
    </section>
</template>


<script setup>
const route = useRoute()

const cars = await useFetchCars(route.params.city, {
    make: route.params.make.split('-OR-'),
    min: route.query.min,
    max: route.query.max
    })

// watch(() => route.query,
//      () => { console.log('ref')}, { immediate: true }
// )

</script>
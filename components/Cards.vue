<template>
    <div class="w-full flex flex-col gap-4">
        <Card v-for="car in cars" :key="car.id" :car="car" :like="liked[car.id]" @toggleLike="toggleLike"/>
    </div>
</template>

<script setup>
// const {cars: buCars} = useCars()
const liked = useLocalStorage('liked', {})

const props = defineProps({
    cars: Array,
    // default: buCars
})
// console.log('cars', props)

const toggleLike = (id) => {

    if (liked.value[id]) {
        delete liked.value[id]
    } else {
        liked.value[id] = true
    }
}

</script>
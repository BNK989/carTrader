<template>
    <div class="mt-10">
        <img :src="car.url" class="w-full" alt="" />
        <h1 class="mt-10 text-4xl">{{car.name}}</h1>
        <div class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between">
            <div class="flex">
                <p class="mr-2">5 seats</p>
                <p class="mr-2">|</p>
                <p class="mr-2">{{miles.toLocaleString()}} miles</p>
            </div>
            <div>
                <p class="font-bold text-2xl">{{price}}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { formatCurrency } = useUtilities()
const props = defineProps({
    car: Object,
})

const miles = +props.car.miles
const price = formatCurrency(+props.car.price)
</script>

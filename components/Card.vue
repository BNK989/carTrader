<template>
    <div class="relative">
        <NuxtLink :to="`/car/${car.make}-${car.id}`">
            <div
                class="grid items-center grid-cols-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <NuxtImg
                    class="object-cover rounded-t-lg h-full md:rounded-none md:rounded-s-lg"
                    :src="car.url"
                    :alt="car.name + ' image'" />
                <div class="flex flex-col h-full justify-evenly p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ car.name }}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
                        order.
                    </p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ price }}</p>
                </div>
            </div>
        </NuxtLink>
        <span
            @click.stop="emit('toggleLike', car.id)"
            :class="like ? 'bg-red-600' : 'bg-gray-600'"
            class="absolute cursor-pointer top-2 right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-50 rounded-full">
            LIKE {{ like ? '✓' : 'X' }}
        </span>
    </div>
</template>

<script setup>
const props = defineProps({
    car: Object,
    like: Boolean,
})
const emit = defineEmits(['toggleLike'])

const { formatCurrency } = useUtilities()

const price = formatCurrency(props.car.price, 'ILS')
</script>

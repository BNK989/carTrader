<template>
    <button
        id="priceRangeButton"
        data-dropdown-toggle="priceRangeDropdown"
        data-dropdown-ignore-click-outside-class="pricepicker"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        ${{priceRange.min}}
        <p class="ms-1">- ${{priceRange.max}}</p>
        <svg class="w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4" />
        </svg>
    </button>

    <div
        id="priceRangeDropdown"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-80 lg:w-96 dark:bg-gray-700 dark:divide-gray-600">
        <div class="p-3" aria-labelledby="priceRangeButton">
            <div price-rangepicker pricepicker-autohide class="flex items-center">
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        $

                    </div>
                    <input
                        name="start"
                        type="text"
                        v-model="priceRange.min"
                        @input="handleChange"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Min price" />
                    </div>
                    <span class="mx-2 text-gray-500 dark:text-gray-400">to</span>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            $
                        </div>
                        <input
                        v-model="priceRange.max"
                        @input="handleChange"
                        name="end"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Max price" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const route = useRoute()
    const router = useRouter()


const priceRange = ref({
    min: route.query.min || 0,
    max: route.query.max || 0
})

const handleChange = () => {
    router.push({query: {...route.query, ...priceRange.value}})
}
</script>

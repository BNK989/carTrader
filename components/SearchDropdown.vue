<template>
    <button
        id="dropdownSearchButton"
        data-dropdown-toggle="dropdownSearch"
        data-dropdown-placement="bottom"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button">
        Select Make
        <svg
            class="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6">
            <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4" />
        </svg>
    </button>

    <!-- Dropdown menu -->
    <div id="dropdownSearch" class="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700">
        <div class="p-3">
            <label for="input-group-search" class="sr-only">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20">
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input
                    v-model="query"
                    @input="onInput"
                    type="search"
                    id="input-group-search"
                    class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Make" />
            </div>
        </div>
        <ul
            class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownSearchButton">
            <li v-for="o in localOptions">
                <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                        :id="`checkbox-item-${o.toLowerCase()}`"
                        type="checkbox"
                        :value="`${o.toLowerCase()}`"
                        :checked="selectedMakes.includes(o.toLowerCase().replace(' ', '-'))"
                        :data-car="`${selectedMakes}`"
                        @change="onMakeSelect"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label
                        :for="`checkbox-item-${o.toLowerCase()}`"
                        class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                        >{{o}}</label
                    >
                    <!-- CHECK BOX OK CHECK AREA NOT OK -->
                </div>
            </li>
        </ul>
        <a
            href="#"
            class="flex items-center p-3 text-sm font-medium text-red-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
            <!-- <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18">
                <path
                    d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2Z" />
            </svg> -->
            Clean Selection
        </a>
    </div>
    
</template>

<script setup>

const route = useRoute()
const router = useRouter()

const props = defineProps({
    options: Array
})

const query = ref('')
const selectedMakes = ref(route.params.make.split('-OR-'))
const localOptions = ref(props.options)

const onInput = () => {
    console.log('query.value:', query.value)
    if (!query.value) {
        localOptions.value = props.options
    }
    localOptions.value = props.options.filter(o => o.toLowerCase().includes(query.value.toLowerCase()))
}

const onMakeSelect = (e) => {
    const curr = e.target.value.toLowerCase().replace(' ', '-')

    if(selectedMakes.value.includes(curr)) {
        selectedMakes.value = selectedMakes.value.filter(o => o !== curr)
    } else {
        selectedMakes.value.push(curr)
    }
    // console.log('selectedMakes', selectedMakes.value)
    router.push(`/city/${route.params.city}/car/${selectedMakes.value.join('-OR-')}`)
}

</script>


<template>
    <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <div
            :class="cityError ? 'border-red-500 border-2': '' "
            class="relative w-[1000px] text-2xl rounded-full bg-white dark:bg-black flex justify-between  drop-shadow-2xl mx-auto">
            
            <input
                v-model="city"
                type="text"
                class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none bg-transparent dark:text-white"
                
                placeholder="Search by city..." />
                
            <button class="bg-sky-900 hover:bg-sky-800 px-10 text-white rounded-full" @click="handleSearch">Search</button>
            <span v-if="cityError" class="absolute flex justify-center w-full text-red-500 -bottom-8 pointer-events-none drop-shadow-lg">Please fill in the city</span>
        </div>
    </div>
</template>

<script setup>
const city = ref('')
const cityError = ref(false)

const handleSearch = () => {
    if(!city.value) return cityError.value = true
    navigateTo(`/city/${city.value}/car`)
}

</script>

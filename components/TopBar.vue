<template>
  <div class="flex items-end gap-4 justify-between my-4 p-4 h-24 border border-gray-600 rounded">
    <form @submit.prevent="$router.push(`/city/${city}/car/${make}`)" class="relative">
      <input type="text" class="peer max-w-44 py-1 pl-4 px-4  rounded dark:bg-gray-800 dark:text-gray-50 placeholder-transparent" placeholder="City" v-model="city">
      <label for="default-search" class="absolute left-4 top-1 -translate-y-8 transition-all peer-placeholder-shown:translate-y-0">Location</label>
    </form>
    <form @submit.prevent="$router.push(`/city/${city}/car/${make}`)" class="relative">
      <input type="text" class="peer max-w-44 p-1 pl-4 rounded dark:bg-gray-800 dark:text-gray-50 placeholder-transparent" placeholder="Make" v-model="make">
      <label for="default-search" class="absolute left-4 top-1 -translate-y-8 transition-all peer-placeholder-shown:translate-y-0">Make</label>
    </form>
    <form class="relative">
      <input type="text" class="peer max-w-44 p-1 pl-4 rounded dark:bg-gray-800 dark:text-gray-50 placeholder-transparent" placeholder="Price">
      <label for="default-search" class="absolute left-4 top-1 -translate-y-8 transition-all peer-placeholder-shown:translate-y-0">Price</label>
    </form>
    <SearchDropdown />

  </div>
</template>

<script setup>
const route = useRoute()
const city = ref(route.params.city)
const make = ref(route.params.make)

if (!isNaN(+city.value)) {
    throw createError({ 
      statusCode: 400, 
      statusMessage: 'Not a valid city'
    })
}

</script>
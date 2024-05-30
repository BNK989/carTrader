<template>
  <div class="flex gap-4 justify-between my-4 p-4 border border-gray-600 rounded">
    <form @submit.prevent="$router.push(`/city/${city}/car/${make}`)">
      <label for="default-search">Location</label>
      <input type="text" class="rounded mx-3 dark:bg-gray-800 dark:text-gray-50" v-model="city">
    </form>
    <form @submit.prevent="$router.push(`/city/${city}/car/${make}`)">
      <label for="default-search">Make</label>
      <input type="text" class="rounded mx-3 dark:bg-gray-800 dark:text-gray-50" v-model="make">
    </form>
    <div>
      <label for="default-search">Price</label>
      <input type="text" class="rounded mx-3 dark:bg-gray-800 dark:text-gray-50">
    </div>

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
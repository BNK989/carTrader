<template>
  <div class="even:bg-gray-800 p-4">
    <h1 class="font-fold text-2xl">{{ message.name }}</h1>
    <p> {{ message.message }}  </p>
    <div class="flex items-center mt-4">
      <p class="text-green-700 mr-10">{{ message.email }}</p>
      <p class="text-blue-500">{{ message.phone }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  message: Object,
})
</script>
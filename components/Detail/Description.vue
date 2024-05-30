<template >
    <p class="my-10">
     {{ props.description || 'No description available' }}
    </p>
</template>

<script setup>
  const props = defineProps({
    description: String,
  })
</script>
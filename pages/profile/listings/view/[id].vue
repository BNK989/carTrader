<template>
  <div class="rounded shadow mt-20 dark:text-slate-50">
    <MessageCard v-for="message in messages" :key="id" :message="message"/>
  </div>
</template>

  <script setup>
  definePageMeta({
    layout: "other",
  })
  const route = useRoute()
  const {data: messages} = useFetch(`/api/car/listings/${route.params.id}/message`)
  </script>
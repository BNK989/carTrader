<template>
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <TopBar />
                <div class="results flex flex-col gap-4">
                    <NuxtPage />
                </div>
        </div>
</template>

<script setup>
const route = useRoute()
useHead({
    title: `${route.params.make || 'Cars' } in  ${route.params.city || 'your city' }`,
})

definePageMeta({
    layout: 'other',
})

</script>
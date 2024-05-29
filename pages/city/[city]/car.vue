<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <TopBar />
                <div class="results flex flex-col gap-4">
                    <NuxtPage />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const route = useRoute()
useHead({
    title: `${route.params.make || 'Cars' } in  ${route.params.city || 'your city' }`,
})

</script>
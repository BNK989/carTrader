<template>
    <NuxtErrorBoundary>
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <TopBar />
            <div class="results flex flex-col gap-4">
                <NuxtPage />
            </div>
        </div>

        <template #error="{ error }">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-50">
            <pre>{{ error }}</pre>
            <h1>Oppsi, {{ error.statusCode }}</h1>
            <code>{{ error.message }}</code>
            <button 
                class="mt-8 bg-gradient-to-r bg-blue-800 hover:bg-gradient-to-r hover:from-primary-600 from-primary-500 to-primary-700 text-white px-10 py-3 rounded" 
                @click="handleErrorClick(error)">Go back</button>
            </div>
        </template>
    </NuxtErrorBoundary>
</template>

<script setup>
const route = useRoute()
const { capitalize } = useUtilities()

useHead({
    title: `${capitalize(route.params.make) || 'Cars'} in  ${capitalize(route.params.city) || 'your city'}`,
})

definePageMeta({
    layout: 'other',
})

const handleErrorClick = (err = 'null') => {
    console.log('error', err)
    error.value = null
}
</script>

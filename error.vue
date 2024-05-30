<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div class="text-center">
            <h1 class="text-6xl font-bold text-gray-700 dark:text-white">Error {{err.statusCode}}</h1>
            <p class="mt-4 text-xl text-gray-600 dark:text-gray-400">{{err.message}}</p>
            <p class="mt-4 text-4xl text-gray-600 dark:text-gray-400">You will be redirected to the home page</p>
            <h6 class="mt-4 text-4xl text-gray-600 dark:text-gray-400">In {{timeToRedirect}} seconds</h6>
            <button
                type="button"
                class="mt-8 bg-gradient-to-r bg-blue-800 hover:bg-gradient-to-r hover:from-primary-600 from-primary-500 to-primary-700 text-white px-10 py-3 rounded"
                @click="handleClick"
            >
                Go to Home Page
            </button>
            
        </div>
    </div>
</template>

<script setup>

const err = useError()
let timeToRedirect = ref(8)

const timer = setInterval(() => {
    timeToRedirect.value--
    if (timeToRedirect.value <= 0) {
        clearInterval(timer)
        clearErr()
    }
}, 1000);

const handleClick = () => {
    clearInterval(timer)
    clearErr()
}

const clearErr = () => {
    clearError({ redirect: '/' })
}


</script>

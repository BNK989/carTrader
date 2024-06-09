<template>
    <div class="mt-10">
        <div class="flex w-[600px] justify-between">
            <input v-model="message.name" type="text" class="border p-1 dark:bg-gray-950" placeholder="Name" />
            <input v-model="message.email" type="text" class="border p-1 dark:bg-gray-950" placeholder="Email" />
            <input v-model="message.phone" type="text" class="border p-1 dark:bg-gray-950" placeholder="Phone" />
        </div>
        <div class="flex mt-4 w-[600px]">
            <textarea
                v-model="message.message"
                class="border p-1 w-full dark:bg-gray-950"
                placeholder="Message"></textarea>
        </div>
        <button :disabled="disableButton" @click="onSubmit" class="bg-blue-400 text-white px-10 py-3 rounded mt-4">
            Submit
        </button>
        <p v-if="errMsg" class="text-red-500">{{ errMsg }}</p>
        <p v-if="successMsg" class="text-green-500">{{ successMsg }}</p>
    </div>
</template>

<script setup>
const route = useRoute()

const message = reactive({
    name: '',
    email: '',
    phone: '',
    message: '',
})
const errMsg = ref('')
const successMsg = ref('')

const disableButton = computed(() => {
    for (let key in message) {
        if (!message[key]) return message[key]
    }
    return false
})


const onSubmit = async () => {
    try {
        const response = await $fetch(`/api/car/listings/${route.params.id}/message`, {
            method: 'POST',
            body: message,
        })
        successMsg.value = 'Your message has been sent. Thank you!'
    } catch (err) {
        errMsg.value = err.statusMessage
        console.error('there was an error', err)
    }
}
</script>

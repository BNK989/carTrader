<template>
    <div>
        <div class="mt-24 dark:text-gray-50">
            <h1 class="text-6xl">Create a New Listing</h1>
        </div>
        <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
            <AdSelect title="Make *" :options="makes" name="make" @change-input="onChangeInput" />
            <AdInput
                v-for="input in inputs"
                :key="input.id"
                :title="input.title"
                :name="input.name"
                :placeholder="input.placeholder"
                @change-input="onChangeInput" />
            <AdTextarea title="Description *" name="description" placeholder="" @change-input="onChangeInput" />
            <AdImage @change-input="onChangeInput" />
            <div>
                <button
                    :disabled="isButtonDisabled"
                    @click="handleSubmit"
                    class="bg-blue-400 text-white px-10 py-3 rounded mt-4 w-full">
                    Submit
                </button>
                <p v-if="errorMsg" class="text-red-500">{{ errorMsg }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'other',
})

const { makes } = useMakes()
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const errorMsg = ref('')

const info = useState('adInfo', () => {
    return {
        make: '',
        model: '',
        year: '',
        miles: '',
        price: '',
        city: '',
        seats: '',
        features: '',
        description: '',
        image: null,
    }
})

const onChangeInput = (data, name) => {
    info.value[name] = data
}

const inputs = [
    {
        id: 1,
        title: 'Model *',
        name: 'model',
        placeholder: 'Civic',
    },
    {
        id: 2,
        title: 'Year *',
        name: 'year',
        placeholder: '2019',
    },
    {
        id: 3,
        title: 'Miles *',
        name: 'miles',
        placeholder: '10000',
    },
    {
        id: 4,
        title: 'City *',
        name: 'city',
        placeholder: 'Austin',
    },
    {
        id: 5,
        title: 'Number of Seats *',
        name: 'seats',
        placeholder: '5',
    },
    {
        id: 6,
        title: 'Features *',
        name: 'features',
        placeholder: 'Leather Interior, No Accidents',
    },
    {
        id: 7,
        title: 'Price *',
        name: 'price',
        placeholder: '19999',
    },
]

const isButtonDisabled = computed(() => {
    for (let key in info.value) {
        if (!info.value[key]) return true
    }
    return false
})

const handleSubmit = async () => {
    const fileName = `${info.value.make}_${info.value.model}_${Date.now()}`
    const {data, error} = await supabase.storage.from('images').upload(`public/${fileName}`, info.value.image)
    if(error) {
        return errorMsg.value = 'error: Cannot upload image'
    }
    const body = {
        ...info.value,
        features: info.value.features.split(', '),
        numberOfSeats: +info.value.seats,
        price: +info.value.price,
        year: +info.value.year,
        miles: +info.value.miles,
        name: info.value.make + ' ' + info.value.model,
        listerId: user.value.id,
        image: data.path,
    }

    delete body.seats

    try {
        const res = await $fetch('/api/car/listings', {
            method: 'POST',
            body,
        })
        navigateTo('/profile/listings')
    } catch (err) {
        console.error('there was an error', err)
        errorMsg.value = err.statusMessage
        await supabase.storage.from('images').remove([data.path])
    }
}
</script>

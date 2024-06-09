<template>
    <div class="dark:text-slate-50">
        <div class="flex flex-1 justify-between mt-24 items-center">
            <h1 class="text-6xl">My Listings</h1>
            <NuxtLink
                to="/profile/listings/create"
                class="w-9 h-9 bg-blue-400 flex justify-center items-center rounded-full text-white font-bold cursor-pointer"
                >+</NuxtLink
            >
        </div>
        <div class="shadow rounded p-3 mt-5">
            <ListingCard
                v-for="listing in listings"
                :key="listing.id"
                :listing="listing"
                @delete-listing="handleDelete" />
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'other',
})

const user = useSupabaseUser()
const { data: listings, refresh } = useFetch(`/api/car/listings/user/${user.value.id}`)

const handleDelete = async (id) => {
    try {
        await $fetch(`/api/car/listings/${id}`, {
            method: 'DELETE',
        })
        listings.value = listings.value.filter((listing) => listing.id !== id)
    } catch (err) {
        console.error('there was an error', err)
        refresh()
    }
}
</script>
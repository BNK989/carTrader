<template>
    <div class="mt-5 border-b pb-5">
        <ul class="flex text-lg mt-2 gap-6">
            <li v-for="feature in features" :key="feature" class="custom-li list-inside list-['✔'] marker:px-4">
                {{ feature }}
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    features: Array,
})
</script>

<style>
li.custom-li::marker {
    margin-right: 1em;
}
</style>

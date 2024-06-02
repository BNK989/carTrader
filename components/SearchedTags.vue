<template>
<!-- <pre>{{ selectedMakes }}</pre> -->
    <ul v-if="selectedMakes">
        <li 
        v-for="tag in selectedMakes" 
        v-if="tag !== ''"
        :key="tag"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 capitalize"
        >{{ tag.replace(/-/g, ' ') }}</li>
    </ul>
    
</template>
<script lang="ts" setup>
const route = useRoute()
// const selectedMakes = ref(route.params.make.split('-OR-'))
const selectedMakes = ref<string[]>([])

const updateSelectedMakes = () => {
  selectedMakes.value = route.params.make ? route.params.make.split('-OR-') : [];
  selectedMakes.value = selectedMakes.value.filter(o => o !== '')
}


watch(() => route.params.make, () => {
    updateSelectedMakes()}, { immediate: true }
)


</script>


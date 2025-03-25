<script setup lang="ts">
const props = defineProps({
    target: { type: String, required: true }
})
const emit = defineEmits(['childEvent'])
const copyWord = () => {
    emit('childEvent', props.target)
}
</script>

<template>
    <span style="text-decoration: underline; cursor: pointer" @click="copyWord" v-text="target"></span>
</template>

<script setup lang="ts">
import WordPicker from '../components/WordPicker.vue'
</script>

<template>
    <a href="/">
        <svg viewBox="0 0 24 24" width="24" height="24" style="fill: gray">
            <use href="#chevron-left-circle" />
        </svg>
    </a>
    <section class="section">
        <div class="container">
            <word-picker></word-picker>
        </div>
    </section>
</template>


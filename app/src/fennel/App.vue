<script setup lang="ts">
import LylicClipper from '../components/LylicClipper.vue'
</script>

<template>
    <a href="/">
        <svg viewBox="0 0 24 24" width="24" height="24" style="fill: gray">
            <use href="#chevron-left-circle" />
        </svg>
    </a>
    <section class="section">
        <div class="container">
            <lylic-clipper></lylic-clipper>
        </div>
    </section>
</template>
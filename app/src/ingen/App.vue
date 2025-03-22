<script setup lang="ts">
import DropZone from '../components/DropZone.vue'
import NowLoading from '../components/NowLoading.vue'
import ResultModal from '../components/ResultModal.vue'
</script>

<template>
    <a href="/">
        <svg viewBox="0 0 24 24" width="24" height="24" style="fill: gray">
            <use href="#chevron-left-circle" />
        </svg>
    </a>
    <section class="section">
        <drop-zone></drop-zone>
    </section>
    <now-loading></now-loading>
    <result-modal></result-modal>
</template>
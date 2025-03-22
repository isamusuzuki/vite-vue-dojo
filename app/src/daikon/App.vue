<script setup lang="ts">
import FakeButton from '../components/FakeButton.vue'
import NowLoading from '../components/NowLoading.vue'
import ResultModal from '../components/ResultModal.vue'
</script>

<template>
    <a href="/">
        <svg viewBox="0 0 24 24" width="24" height="24" style="fill: gray;">
            <use href="#chevron-left-circle" />
        </svg>
    </a>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-4 is-offset-1">
                    <fake-button></fake-button>
                </div>
            </div>
        </div>
    </section>
    <now-loading></now-loading>
    <result-modal></result-modal>
</template>
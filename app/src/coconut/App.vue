<script setup lang="ts">
import KeywordInput from '../components/KeywordInput.vue'
import KeywordOutput from '../components/KeywordOutput.vue'
import CounterStore from '../components/CounterStore.vue'
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
                <div class="column is-3 is-offset-1"><counter-store></counter-store></div>
            </div>
            <div class="columns">
                <div class="column is-3 is-offset-1"><counter-store></counter-store></div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-4 is-offset-1">
                    <keyword-input></keyword-input>
                    <keyword-output></keyword-output>
                </div>
            </div>
        </div>
    </section>
</template>

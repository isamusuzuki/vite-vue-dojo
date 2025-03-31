<script setup lang="ts">
import KeywordSimple from '../components/KeywordSimple.vue'
import CounterSimple from '../components/CounterSimple.vue'
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
                <div class="column is-3 is-offset-1"><counter-simple></counter-simple></div>
            </div>
            <div class="columns">
                <div class="column is-3 is-offset-1"><counter-simple></counter-simple></div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-4 is-offset-1">
                    <keyword-simple></keyword-simple>
                </div>
            </div>
        </div>
    </section>
</template>

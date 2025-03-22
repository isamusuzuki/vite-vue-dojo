<script setup lang="ts">
import NavigationBar from '../components/NavigationBar.vue'
</script>

<template>
    <navigation-bar></navigation-bar>
    <section class="section">
        <div class="container">
            <router-view></router-view>
        </div>
    </section>
</template>

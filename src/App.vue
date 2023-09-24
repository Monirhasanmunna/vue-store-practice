<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import { useRoute } from 'vue-router';
const router = useRoute();
</script>

<template>

<NavbarComponent></NavbarComponent>

<div class="container">
  <router-view :key="$router.fullpath"></router-view>
</div>

</template>

<style scoped>

</style>

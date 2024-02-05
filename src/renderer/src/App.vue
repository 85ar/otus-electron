<template>
  <div class="app">
    <LayoutComponent>
      <router-view />
    </LayoutComponent>
  </div>
</template>

<script setup lang="js">
import LayoutComponent from './components/LayoutComponent.vue'
</script>

<style lang="scss">
.app {
  margin: 0 auto;
}
</style>

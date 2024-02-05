<template>
  <div class="layout">
    <HeaderComponent></HeaderComponent>
    <main class="content">
      <slot></slot>
    </main>
  </div>
</template>
<script setup>
import HeaderComponent from './HeaderComponent.vue'
</script>

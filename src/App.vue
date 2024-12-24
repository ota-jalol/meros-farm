<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ModalsContainer } from "vue-final-modal";
</script>

<template>
  <header>
    <h1>Welcome to Meros Pharm</h1>
  </header>

  <RouterView />
  <ModalsContainer />

  <footer>
    <p>&copy; 2023 Meros Pharm. All rights reserved.</p>
  </footer>
</template>

<style scoped>
header {
  background-color: #62C4BF;
  color: white;
  padding: 10px;
  text-align: center;
}

footer {
  background-color: #62C4BF;
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>

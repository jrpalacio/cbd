<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/questions">Preguntas frecuentes</RouterLink>
      <RouterLink to="/account">Cuenta</RouterLink>
    </nav>
  </header>

  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

@media (min-width: 1024px) {
}
</style>
